import api from './api'

class FileService {
    upload(file) {
        return api.post(`/file/upload`, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    download(filename) {
        return api.get(`/file/${filename}`)
    }
    getFileURL(filename) {
        return api.defaults.baseURL + '/file/' + filename
    }
}

export default new FileService()
