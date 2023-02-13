const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body className='container flex-grow-1 flex-shrink-0'>
                <nav className='navbar navbar-expand-lg mb-3 navbar-dark bg-primary rounded'>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a href='/' className='nav-link'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/places' className='nav-link'>Places</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/places/new' className='nav-link'>Add Place</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {html.children}
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </body>
            <footer className='flex-shrink-0'>
                <div className='card card-white rounded text-center mt-3 mx-auto mb-5 w-75'>
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