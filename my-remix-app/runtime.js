// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import * as entrySW from 'virtual:entry-sw'

const defaultHandler =
    entrySW.entry.module.defaultFetchHandler ||
    (event => fetch(event.request.clone()))

function createContext(event) {
    const context = entrySW.entry.module.getLoadContext?.(event) || {}
    return {
        event,
        fetchFromServer: () => fetch(event.request.clone()),
        ...context,
    }
}

self.addEventListener('fetch', async event => {
    const url = new URL(event.request.url)
    const routeDataParam = url.searchParams.get('_data')

    const route = routeDataParam ? entrySW.routes[routeDataParam] : undefined

    const args = {
        request: event.request,
        params: '',
        context: createContext(event),
    }

    // within our fetch handler
    try {
        if (isLoaderRequest(event.request) && route?.module.workerLoader) {
            const response = route.module.workerLoader(args)
            event.respondWith(response.then(res => (isResponse(res) ? res : json(res))))
            return
        }

        if (isActionRequest(event.request) && route?.module.workerAction) {
            const response = route.module.workerAction(args)
            event.respondWith(response.then(res => (isResponse(res) ? res : json(res))))
            return
        }
    } catch (error) {
        console.error(`An error occurred: ${error}`)
    }

})

function isResponse(value) {
    return (
        value != null &&
        typeof value.status === 'number' &&
        typeof value.statusText === 'string' &&
        typeof value.headers === 'object' &&
        typeof value.body !== 'undefined'
    )
}