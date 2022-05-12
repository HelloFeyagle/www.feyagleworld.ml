export default async (req, res) => {
    if(req.method !== 'POST') return res.json({
        success: false,
        message: 'Invalid method.'
    });
    let { username, email, content } = req.body;
    let _ =  await fetch(process.env.mrpmutlu, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'xrqu.live | Contact Form',
          attachments: [],
          embeds: [
            {
              title: 'Contact - '+username,
              type: "rich",
              color: 5193214,
              fields: [
                {
                  name: 'Email',
                  value: email || 'N/A'
                },
                {
                  name: 'Username',
                  value: username || 'N/A'
                },
                {
                  name: 'Content',
                  value: content || 'N/A'
                }
              ]
            }
          ]
        })
    });

    try {
        res.send(_)
    } catch {
        res.status(500);
    }
}
