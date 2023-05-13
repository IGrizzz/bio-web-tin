import "./App.css"
import map from "./assets/images/map.png"
import s1 from "./assets/images/s1.png"
import s3 from "./assets/images/s3.png"
import s4 from "./assets/images/s4.png"
import s5 from "./assets/images/s5.png"
import s6 from "./assets/images/s6.png"
import s7 from "./assets/images/s7.png"
import c1 from "./assets/images/c1.png"
// import c2 from "./assets/images/c2.png"
import c3 from "./assets/images/c3.png"
import c4 from "./assets/images/c4.png"
import c5 from "./assets/images/c5.png"
import c6 from "./assets/images/c6.png"

// import line from "./assets/images/line.png"
import linew from "./assets/images/linew.png"

function Story(){
    return(
       <div className="story row justify-content-center">
            <div className="col-8">
                <h1 className="title ">Success Story saya di Sayur Matua</h1>
                {/* <div className="line bg-primary col-12 rounded">.</div> */}
                <img src={map} className=" col-12 rounded my-3" alt="map"/>
                
                <div>
                    <p className="justifytext col-12"><strong>Sayur Matua  </strong> merupakan salah satu desa yang ada di kec. Aek Nabara Barumun, kab. Padang Lawas, prov. Sumatra Utara dengan luas wilayah sekitar 2.819 Ha dan jumlah penduduk sebanyak 229 KK (936 jiwa). 
                    Sebagian Besar Masyarakat Sayur Matua memiliki Profesi sebagai Petani dan Peternak, Hanya Sebagian Kecil yang berprofesi di bidang lain.</p>
                </div>
                {/* Eksplorasi Potensi desa */}
                <div>
                    <h2 className="mb-md-4">Eksplorasi Potensi Desa</h2>
                    <h2 className="mb-1 mt-3 d-md-none">2020</h2>
                    {/* no 1 */}
                    <div className=" imagehover d-flex align-items-center my-2 bg-primary rounded px-4 py-2">
                        <h2 className="text-light d-none d-md-block col-1">2020</h2>
                        <img src={linew} className="mx-4 d-none d-md-block" alt="line"></img>
                        <img src={s1} className="col-md-3 col-5 rounded me-3" alt="img1"></img>
                        <p className="text-light fw-bold col-7">Pelaksanaan Sosialisasi Tentang pentingya Pemanfaatan TTG pada aktivitas Bertani dan Beternak</p>
                    </div>
                     {/* no 2 */}
                     <div className=" imagehover d-flex align-items-center my-2 bg-primary rounded px-4 py-2">
                        <h2 className="text-light d-none d-md-block col-1">2020</h2>
                        <img src={linew} className="mx-4 d-none d-md-block"alt="line"></img>
                        <img src={s3} className="col-md-3 col-5 rounded me-3" alt="img2"></img>
                        <p className="text-light fw-bold col-7">Pelaksaan Eksplorasi Lahan Tidur guna Pemanfaatan TTG Pada Aktivitas Bertani dan Beternak</p>
                    </div>
                    {/* no 3 */}
                    <div className=" imagehover d-flex align-items-center my-2 bg-primary rounded px-4 py-2">
                        <h2 className="text-light d-none d-md-block col-1">2020</h2>
                        <img src={linew} className="mx-4 d-none d-md-block" alt="line"></img>
                        <img src={s4} className="col-md-3 col-5 rounded me-3" alt="img3"></img>
                        <p className="text-light fw-bold col-7">Pelaksaan Eksplorasi Ketersediaan Limbah Organik Sebagai Bahan Olahan TTG</p>
                    </div>
                    {/* no 4 */}
                    <div className=" imagehover d-flex align-items-center my-2 bg-primary rounded px-4 py-2">
                        <h2 className="text-light d-none d-md-block col-1">2020</h2>
                        <img src={linew} className="mx-4 d-none d-md-block" alt="line"></img>
                        <img src={s5} className="col-md-3 col-5 rounded me-3" alt="img4"></img>
                        <p className="text-light fw-bold col-7">Pelaksaan Eksplorasi Ketersediaan Sumber Air</p>
                    </div>
                     {/* no 5 */}
                     <div className=" imagehover d-flex align-items-center my-2 bg-primary rounded px-4 py-2">
                        <h2 className="text-light d-none d-md-block col-1">2020</h2>
                        <img src={linew} className="mx-4 d-none d-md-block" alt="line"></img>
                        <img src={s6} className="col-md-3 col-5 rounded me-3" alt="img5"></img>
                        <p className="text-light fw-bold col-7">Pelaksaan Pengujian Potensi sinar matahari & Kecepatan Angin sebagai sumber Energi terbarukan</p>
                    </div>
                    {/* no 5 */}
                    <div className=" imagehover d-flex align-items-center my-2 bg-primary rounded px-4 py-2">
                            <h2 className="text-light d-none d-md-block col-1">2020</h2>
                            <img src={linew} className="mx-4 d-none d-md-block" alt="line"></img>
                            <img src={s7} className="col-md-3 col-5 rounded me-3" alt="img6"></img>
                            <p className="text-light fw-bold col-7">Eksplorasi lahan tidur sebelum dikelola</p>
                    </div>

                    {/* Pengadaan Alat alat TTG Tahap 1 */}
                    <h2 className="mb-md-5 mt-4">Pengadaan Alat-alar Teknologi Tepat Guna Tahap 1</h2>
                    <h2 className="d-md-none">2020</h2>
                    {/* no 1 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c1} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="text-justify md-title">Pembuatan Mesin Pencacah di Bengkel Mitra dan Ujicoba</h4>
                            <p className="text-justify md-text d-none d-md-block">Pengadaan alat dilakukan dengan bekerja sama dengan Bengkel mitra, Alat dikonstruksi sesuai kebutuhan dan tujuan dari TTG tersebut diadakan, dan dilakukan ujicoba terlebih dahulu sebelum alat pencacah digunakan di lokasi</p>
                        </div>
                    </div>
                    {/* no 2 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c3} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="text-justify md-title">Pengangkutan Bantuan Teknologi Tahap Pertama</h4>
                            <p className="text-justify md-text d-none d-md-block">Setelah Dikonstruksi, Alat Kemudian diangkut ke Lokasi dengan menggunakan Transportasi darat, Pengangkutan alat dilakukan dengan hati - hati agar kondisi alat tetap terjaga dan berfungsi sebagaimana mestinya setelah sampai di Desa Sayur Matua</p>
                        </div>
                    </div>
                     {/* no 3 */}
                     <div className="d-flex align-items-center my-5">
                        <img src={c4} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="text-justify md-title">Pertemuan dengan Bupati Padang Lawas dan Serah Terima Alat secara Simbolik</h4>
                            <p className="text-justify md-text d-none d-md-block">Saya dan Kepala Desa Sayur Matua mengadakan Pertemuan dengan Wakil Bupati Padang lawas sekaligus melakukan serah terima alat secara simbolik. Pertemuan ini dilaksanakan di Balai Desa Sayur Matua disaksikan oleh sebagian Besar Warga Desa Sayur Matua</p>
                        </div>
                    </div>
                    {/* no 4 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c5} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="text-justify md-title">Pelatihan Penggunaan Alat Pencacah Mesin Dompeng</h4>
                            <p className="text-justify md-text d-none d-md-block">Setelah Serah terima Alat selesai dilakukan, Kami mengadakan Pelatihan penggunaan Alat kepada Warga Desa Sayur Matua agar Warga dapat menggunakan alat secara optimal dan sebagaimana mestinya untuk mencapai tujuan pertanian dan peternakan yang lebih efektif dari sebelumnya</p>
                        </div>
                    </div>
                    {/* no 5 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c6} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="text-justify md-title">Pelatihan Penggunaan Alat Penyiang Gulma dan Tanah</h4>
                            <p className="text-justify md-text d-none d-md-block">Selanjutnya Kami mengadakan pelatihan penggunaan Alat Penyiang Gulma dan Tanah, dengan tujuan warga di Desa Sayur Matua mampu menggunakan alat sesuai fungsinya dan dengan hasil semaksimal mungkin. Pelatihan dilakukan dengan menggunakan Lahan yang telah tersedia di Desa Sayur Matua.</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Story;