import './App.css'
import profileFoto from './assets/images/Rectangle 10.png';
import pubLogo from './assets/images/publikasi.svg';
import patLogo from './assets/images/paten.png';
import usu from './assets/images/usu.png';
import uom from './assets/images/uom.png';
import arrow from './assets/images/arrow.png';
import profile from './assets/images/profile.png';

function Header() {
  return (
    <div className="d-inline-flex">
      <div className="left-side col-4 me-3">
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
            <div className='pub-pat-btn btn btn-primary col-4 px-3 py-3 mx-2'>
                <img className='my-1' src={pubLogo}/>
                <h1 className='mb-0 text-white fs-3'>
                    Publikasi
                </h1>
            </div>
            <div className='pub-pat-btn btn btn-primary col-4 px-3 py-3 mx-2'>
                <img className='my-1' src={patLogo}/>
                    <h1 className='mb-0 text-white fs-3'>
                        Paten
                    </h1>
            </div>
        </div>
      </div>
      <div className="right-side col-8 pt-5">
          <h1 className='fw-bolder'>Dr. Tulus Ikhsan Nasution, S.Si., M.Sc.</h1>
          <div className='container card rounded-4 text-bg-primary px-3 py-3'>
            <div className='bio-cont ms-3 px-4 py-3'>
              <p className='text-bio text-secondary fw-semibold fs-4'>
                    Saya adalah salah satu Dosen dan Peneliti di Universitas Sumatera Utara (USU) di bidang Fisika Instrumentasi. Saya tertarik dengan bidang Penelitian Rancang Bangun Sistem Kontrol Otomatis dan Pengembangan juga Aplikasi Energi Terbarukan.
                </p>
            </div>
              
              <div className='riw-pend row my-4'>
                <p className='text-secondary fw-bold fs-3 col text-center'>Riwayat Pendidikan</p>
                <div className='pendidikan-box container row justify-content-center'>
                    <div className='pend-btn rounded-4 btn btn-secondary mx-4  py-1 col-2'>
                          <img className='' src={usu} alt='s1-logo'/>
                          <h1 className='btn-bot-text text-primary'>S1</h1>
                    </div>
                    <div className='pend-btn rounded-4 btn btn-secondary mx-4  py-1 col-2'>
                          <img className='' src={uom} alt='s2-logo'/>
                          <h1 className='btn-bot-text text-primary'>S2</h1>
                    </div>
                    <div className='pend-btn rounded-4 btn btn-secondary mx-4 py-1 col-2'>
                          <img className='' src={uom} alt='s3-logo'/>
                          <h1 className='btn-bot-text text-primary'>S3</h1>
                    </div>
                </div>
              </div>
              <div className='pres-peng row justify-content-center my-4'>
                  <div className='bio-cont-pres-peng col-12 text-center'>
                      <p className='text-secondary fw-bold fs-3'>Penghargaan dan Prestasi saya dapat dilihat dengan meng-klik tombol dibawah ini</p>
                  </div>
                  <div className='btn btn-secondary d-inline-flex align-items-center rounded-4 col-4 justify-content-center'>
                    <p className='fw-bold text-primary fs-4 pt-2 me-3'>Klik Saya</p>
                    <img className='' src={arrow} alt=''/>
                  </div>
              </div>
              <div className='row justify-content-center my-4'>
                  <div className='bio-cont-pres-peng text-center'>
                     <p className='text-secondary fw-bold fs-3'>Sukses Story saya dapat dilihat dengan meng-klik tombol dibawah ini</p> 
                  </div>
                  <div className='btn btn-secondary rounded-4 col-3'>
                      <p className='text-primary fw-bold fs-4 pt-2'>Sayur Matua</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
