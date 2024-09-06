class Response {
    static success(res, statusCode, message, data = {}) {
        return res.status(statusCode).json({
            status: statusCode,
            message: message,
            data: data
        });
    }

    static error(res, statusCode, message, error = null) {
        return res.status(statusCode).json({
            status: statusCode,
            message: message,
            error: error
        });
    }
}

export default Response;
