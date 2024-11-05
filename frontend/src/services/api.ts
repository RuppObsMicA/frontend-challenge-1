interface FetchOptions extends RequestInit {
    body?: any;
    headers?: { [key: string]: string };
}

export const fetchAPI = async (url: string, options: FetchOptions = {}) => {
    const { method = 'GET', body, headers = {}, ...rest } = options;

    const fetchOptions: FetchOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        ...rest,
    };

    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Something went wrong.');
    }
};

