const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body className='flex-grow-1 flex-shrink-0'>
                {html.children}
            </body>
            <footer className='flex-shrink-0'>
                <div className='card card-white rounded text-center mt-2 mx-auto mb-5 w-75 '>
                    <div className='card-header'>
                        Connect With Me
                    </div>
                    <div className='card-body d-flex justify-content-around'>
                        <a href='https://github.com/n-jaramillo' className='btn btn-primary'>Github</a>

                        <a href='https://www.linkedin.com/in/n-jaramillo/' className='btn btn-primary'>
                            LinkedIn
                        </a>
                        <a href='https://app.slack.com/client/T010RU4SGLD/D035ST23ECF/rimeto_profile/U0369QVMGTW' className='btn btn-primary'>
                            Slack
                        </a>
                    </div>
                </div>
            </footer>
        </html>
    )
}

module.exports = Def