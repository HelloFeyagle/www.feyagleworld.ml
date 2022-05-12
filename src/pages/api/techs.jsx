export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/static/techs/html.svg"
        },
        {
            "name": "CSS",
            "src": "/static/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/static/techs/javascript.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/static/techs/mongodb.svg"
        },
        {
            "name": "React",
            "src": "/static/techs/react.svg"
        },
        {
            "name": "Github",
            "src": "/static/techs/github.svg"
        },

    ]
    res.status(200).json(techs)
}
