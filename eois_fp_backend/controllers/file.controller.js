const { uploadFile } = require('../middlewares')

exports.upload = async (req, res) => {
    try {
        await uploadFile(req, res)

        if (req.file == undefined) {
            return res.status(400).send({ message: 'Please upload a file!' })
        }

        res.status(200).send({
            filename: req.file.originalname
        })
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`
        })
    }
}

exports.getListFiles = (req, res) => {
    const directoryPath = __basedir + '/uploads/'

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({ message: 'Unable to scan files!' })
        }

        let fileInfos = []

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            })
        })

        res.status(200).send(fileInfos)
    })
}

exports.download = (req, res) => {
    const fileName = req.params.name
    const directoryPath = 'uploads/'

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({ message: 'Could not download the file. ' + err })
        }
    })
}
