export default async(req, res) => { 
    const techs = [
        {
            "name": "Javascript",
            "src": "/static/techs/javascript.svg"
        },
    ]
    res.status(200).json(techs)
}
