import './App.css'
import pubLogo from './assets/images/publikasi.svg';
import usu from './assets/images/usu.png';
import uom from './assets/images/uom.png';
import arrow from './assets/images/arrow.png';
import profile from './assets/images/profile.png';
import profile2 from './assets/images/profile-2.png';
import "./App.css"

function Header() {
  return (
    <div className="d-inline-flex col-12 justify-content-center justify-content-lg-start">
      <div className="left-side col-4 me-3 d-none d-lg-block">
        <img className='profile-image img-fluid rounded-4' src={profile} alt='profile'/>
        <div className='jabatan py-5 px-3'>
            <div className='jab-box'>
              <h1 className='jab-head mb-0 fs-2'>Dosen</h1>
                <h3 className='jab-child fs-4'>Universitas Sumatera Utara</h3>
            </div>
            <div>
              <h1 className='jab-head mb-0 fs-2'>Kepala Prodi S1 Fisika</h1>
                <h3 className='jab-child fs-4'>Universitas Sumatera Utara</h3>
            </div>
        </div>
        <div className='pub-pat row justify-content-center'>
          <a className='col-5' href='https://www.scopus.com/authid/detail.uri?authorId=55542500300' target="_blank" rel='noopener noreferrer'>
            <div className='pub-pat-btn btn btn-primary col-12 px-3 py-3 mx-2'>
                  <img className='my-1' src={pubLogo} alt="logo-publikasi"/>
                  <h1 className='mb-0 text-white fs-3 text-center'>
                      Publikasi
                  </h1>
              </div>
          </a> 
          {/* <a className='col-4' href='https://www.scopus.com/authid/detail.uri?authorId=55542500300' target="_blank" rel='noopener noreferrer'>
            <div className='pub-pat-btn btn btn-primary col-4 px-3 py-3 mx-2'>
                <img className='my-1' src={patLogo}/>
                    <h1 className='mb-0 text-white fs-3'>
                        Paten
                    </h1>
            </div>
            </a> */}
        </div>
      </div>
      <div className="right-side col-11 col-lg-8 pt-5">
          <div className='col-12 row justify-content-center d-lg-none'>
              <img src={profile2} className='col-4 rounded-circle' alt="fp" />
          </div>
          <h1 className='headline fw-bolder my-3'>Dr. Tulus Ikhsan Nasution, S.Si., M.Sc.</h1>
          <div className='container card rounded-4 text-bg-primary px-3 py-3'>
            <div className='bio-cont ms-lg-3 px-4 py-3'>
              <p className='text-bio text-secondary fw-semibold fs-4'>
                    Saya adalah salah satu Dosen dan Peneliti di Universitas Sumatera Utara (USU) di bidang Fisika Instrumentasi. Saya tertarik dengan bidang Penelitian Rancang Bangun Sistem Kontrol Otomatis dan Pengembangan juga Aplikasi Energi Terbarukan.
                </p>
            </div>
              
              <div className='riw-pend row my-4 pe-sm-0 justify-content-center'>
                <p className='text-secondary fw-bold fs-3 col-12 text-center'>Riwayat Pendidikan</p>
                <div className='pendidikan-box container row col-12 justify-content-center'>
                    <a className='col-4 col-sm-4  col-md-3' href='https://www.usu.ac.id' target="_blank" rel="noopener noreferrer">
                      <div className='pend-btn rounded-4 btn btn-secondary col-12 py-1'>
                            <img className='' src={usu} alt='s1-logo'/>
                            <h1 className='btn-bot-text text-primary'>S1</h1>
                      </div>
                    </a> 
                    <a className="col-4 col-sm-4 col-md-3" href="https://www.ukm.my/" target="_blank" rel="noopener noreferrer" >
                      <div className='pend-btn rounded-4 btn btn-secondary col-12 py-1'>
                            <img className='' src={uom} alt='s2-logo' />
                            <h1 className='btn-bot-text text-primary'>S2</h1>
                      </div>
                    </a>   
                    <a className='col-4 col-sm-4 col-md-3' href="https://www.ukm.my/" target="_blank" rel="noopener noreferrer" >
                      <div className='pend-btn rounded-4 btn btn-secondary col-12 py-1'>
                            <img className='' src={uom} alt='s3-logo'/>
                            <h1 className='btn-bot-text text-primary'>S3</h1>
                      </div>
                    </a>   
                </div>
              </div>
              <div className='pres-peng row justify-content-center my-4'>
                  <div className='bio-cont-pres-peng col-12 text-center'>
                      <p className='text-secondary fw-bold fs-3'>Penghargaan dan Prestasi saya dapat dilihat dengan meng-klik tombol dibawah ini</p>
                  </div>
                  <a className='row col-5 col-lg-4 justify-content-center text-decoration-none' href='/prestasi'>
                    <div className='btn btn-secondary d-inline-flex align-items-center rounded-4 col-12 justify-content-center'>
                        <p className='fw-bold text-primary fs-4 pt-2 me-3'>Klik Saya</p>
                        <img className='' src={arrow} alt='arrow'/>
                      </div>
                  </a>
                  
              </div>
              <div className='row justify-content-center my-4'>
                  <div className='bio-cont-pres-peng text-center'>
                     <p className='text-secondary fw-bold fs-3'>Sukses Story saya dapat dilihat dengan meng-klik tombol dibawah ini</p> 
                  </div>
                  <a className='row col-6 col-md-5` col-lg-4 text-decoration-none' href='/success-story'>
                    <div className='btn btn-secondary rounded-4 col-12'>
                        <p className='text-primary fw-bold fs-4 pt-2'>Sayur Matua</p>
                    </div>
                  </a>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
