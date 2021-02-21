import React from 'react'
import { Link } from 'react-router-dom'

const AboutScreen = () => {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>About</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>About</li>
            </ol>
          </div>
        </div>
      </section>

      {/* <!-- ======= About Us Section ======= --> */}
      <section id='about-us' className='about-us'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title' data-aos='fade-up'>
            <h2>
              <strong>About Us</strong>
            </h2>
          </div>
          <div className='row content'>
            <div className='col-lg-6' data-aos='fade-right'>
              <h2>Eum ipsam laborum deleniti velitena</h2>
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assum perenda sruen jonee trave
              </h3>
            </div>
            <div className='col-lg-6 pt-4 pt-lg-0' data-aos='fade-left'>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <ul>
                <li>
                  <i className='ri-check-double-line'></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequa
                </li>
                <li>
                  <i className='ri-check-double-line'></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </li>
                <li>
                  <i className='ri-check-double-line'></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in
                </li>
              </ul>
              <p className='font-italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Our Team Section ======= --> */}
      <section id='team' className='team section-bg'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <h2>
              Our <strong>Team</strong>
            </h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-1.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/about'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='100'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-2.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/about'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='200'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-3.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/about'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='300'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-4.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/about'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/about'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Our Skills Section ======= --> */}
      <section id='skills' className='skills'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <h2>
              Our <strong>Skills</strong>
            </h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className='row skills-content'>
            <div className='col-lg-6' data-aos='fade-up'>
              <div className='progress'>
                <span className='skill'>
                  HTML <i className='val'>100%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='100'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>

              <div className='progress'>
                <span className='skill'>
                  CSS <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>

              <div className='progress'>
                <span className='skill'>
                  JavaScript <i className='val'>75%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='75'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            </div>

            <div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
              <div className='progress'>
                <span className='skill'>
                  PHP <i className='val'>80%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>

              <div className='progress'>
                <span className='skill'>
                  WordPress/CMS <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>

              <div className='progress'>
                <span className='skill'>
                  Photoshop <i className='val'>55%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='55'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Our Clients Section ======= --> */}
      <section id='clients' className='clients'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Clients</h2>
          </div>

          <div
            className='row no-gutters clients-wrap clearfix'
            data-aos='fade-up'
          >
            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-2.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-3.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-4.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-5.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-6.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-7.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-6'>
              <div className='client-logo'>
                <img
                  src='assets/img/clients/client-8.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutScreen
