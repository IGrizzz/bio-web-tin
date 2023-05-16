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
import c7 from "./assets/images/c7.png"
import c8 from "./assets/images/c8.png"
import c9 from "./assets/images/c9.png"
import c10 from "./assets/images/c10.png"
import c11 from "./assets/images/c11.png"
import c12 from "./assets/images/c12.png"
import c13 from "./assets/images/c13.png"
import c14 from "./assets/images/c14.png"
import c15 from "./assets/images/c15.png"
import c16 from "./assets/images/c16.png"
// import v1 from "https://ik.imagekit.io/9kbvtqrtus/Media1.mp4?updatedAt=1684267172203"

// import line from "./assets/images/line.png"
import linew from "./assets/images/linew.png"

function Story(){
    return(
       <div className="story row justify-content-center">
            <div className="col-md-8 col-11">
                <h1 className="title ">Success Story saya di Sayur Matua</h1>
                {/* <div className="line bg-primary col-12 rounded">.</div> */}
                <img src={map} className=" col-12 rounded my-3" alt="map"/>
                
                <div>
                    <p className="justifytext col-12"><strong>Sayur Matua  </strong> merupakan salah satu desa yang ada di kec. Aek Nabara Barumun, kab. Padang Lawas, prov. Sumatra Utara dengan luas wilayah sekitar 2.819 Ha dan jumlah penduduk sebanyak 229 KK (936 jiwa). 
                    Sebagian Besar Masyarakat Sayur Matua memiliki Profesi sebagai Petani dan Peternak, Hanya Sebagian Kecil yang berprofesi di bidang lain.</p>
                </div>
                {/* Eksplorasi Potensi desa */}
                <div>
                    <h2 className="mb-md-4 ">Eksplorasi Potensi Desa</h2>
                    <h2 className="mb-1 mt-md-3 mt-1 d-md-none">2020</h2>
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
                            <h4 className="md-title">Pembuatan Mesin Pencacah di Bengkel Mitra dan Ujicoba</h4>
                            <p className="text-justify md-text d-none d-md-block">Pengadaan alat dilakukan dengan bekerja sama dengan Bengkel mitra, Alat dikonstruksi sesuai kebutuhan dan tujuan dari TTG tersebut diadakan, dan dilakukan ujicoba terlebih dahulu sebelum alat pencacah digunakan di lokasi</p>
                        </div>
                    </div>
                    {/* no 2 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c3} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Pengangkutan Bantuan Teknologi Tahap Pertama</h4>
                            <p className="text-justify md-text d-none d-md-block">Setelah Dikonstruksi, Alat Kemudian diangkut ke Lokasi dengan menggunakan Transportasi darat, Pengangkutan alat dilakukan dengan hati - hati agar kondisi alat tetap terjaga dan berfungsi sebagaimana mestinya setelah sampai di Desa Sayur Matua</p>
                        </div>
                    </div>
                     {/* no 3 */}
                     <div className="d-flex align-items-center my-5">
                        <img src={c4} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Pertemuan dengan Bupati Padang Lawas dan Serah Terima Alat secara Simbolik</h4>
                            <p className="text-justify md-text d-none d-md-block">Saya dan Kepala Desa Sayur Matua mengadakan Pertemuan dengan Wakil Bupati Padang lawas sekaligus melakukan serah terima alat secara simbolik. Pertemuan ini dilaksanakan di Balai Desa Sayur Matua disaksikan oleh sebagian Besar Warga Desa Sayur Matua</p>
                        </div>
                    </div>
                    {/* no 4 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c5} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Pelatihan Penggunaan Alat Pencacah Mesin Dompeng</h4>
                            <p className="text-justify md-text d-none d-md-block">Setelah Serah terima Alat selesai dilakukan, Kami mengadakan Pelatihan penggunaan Alat kepada Warga Desa Sayur Matua agar Warga dapat menggunakan alat secara optimal dan sebagaimana mestinya untuk mencapai tujuan pertanian dan peternakan yang lebih efektif dari sebelumnya</p>
                        </div>
                    </div>
                    {/* no 5 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c6} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Pelatihan Penggunaan Alat Penyiang Gulma dan Tanah</h4>
                            <p className="text-justify md-text d-none d-md-block">Selanjutnya Kami mengadakan pelatihan penggunaan Alat Penyiang Gulma dan Tanah, dengan tujuan warga di Desa Sayur Matua mampu menggunakan alat sesuai fungsinya dan dengan hasil semaksimal mungkin. Pelatihan dilakukan dengan menggunakan Lahan yang telah tersedia di Desa Sayur Matua.</p>
                        </div>
                    </div>
                {/* Pengadaan Alat alat TTG Tahap 2 */}
                <h2 className="mb-md-5 mt-4">Pengadaan Alat-alar Teknologi Tepat Guna Tahap 2</h2>
                    <h2 className="d-md-none">2020</h2>
                    {/* no 1 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c7} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Pembuatan Mesin Komposter di Laboratorium Penelitian USU</h4>
                            <p className="text-justify md-text d-none d-md-block">Mesin Komposter yang akan diimplementasikan di Desa Sayur Matua dibuat di Laboratorium Penelitian Universitas Sumatera Utara yang selanjutnya akan dikirim dengan menggunakan transportasi darat</p>
                        </div>
                    </div>
                    {/* no 2 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c8} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Pemasangan Sistem Sensor pada Tong Komposter di Prodi S1 Fisika</h4>
                            <p className="text-justify md-text d-none d-md-block">Sebelum diberangkatkan, Mesin Komposter diintegrasikan dengan menggunakan sensor untuk mempermudah analisa dan monitoring Pupuk kompos yang akan di fermentasi didalam Mesin Komposter</p>
                        </div>
                    </div>
                     {/* no 3 */}
                     <div className="d-flex align-items-center my-5">
                        <img src={c9} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Preparasi dan Pemeriksaan Komponen PLTS di Medan</h4>
                            <p className="text-justify md-text d-none d-md-block">Salah satu Komponen penting dalam Pelaksanaan TTG di Desa Sayur Matua adalah Panel Surya 100 Wp, Sebelum diberangkatkan Panel Surya ini di Periksa keadaanya terlebih dahulu, agar mencapai kondisi yang optimal saat Implementasi</p>
                        </div>
                    </div>
                    {/* no 4 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c10} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Pemberangkatan Alat - alat TTG Tahap Kedua</h4>
                            <p className="text-justify md-text d-none d-md-block">Setelah Persiapan telah selesai dilaksanakan, Alat - alat akan diberangkatkan menggunakan Transportasi darat dan diantar dengan hati - hati agar tidak rusak dan mempengaruhi kinerja alat nantinya</p>
                        </div>
                    </div>
                    {/* no 5 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c11} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Pelatihan Persiapan bahan baku dan Pembuatan Pakan Ternak Alternatif dari Limbah Pertanian</h4>
                            <p className="text-justify md-text d-none d-md-block">Pada Pelatihan kali ini, Warga desa sayur matua dilatih agar mampu mempersiapkan Bahan Baku Pembuatan Pakan Ternak alternatif yang berasal dari limbah Pertanian.</p>
                        </div>
                    </div>
                    {/* no 6 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c12} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Proses Fermentasi Menggunakan Tong Plastik yang dilengkapi dengang Menggunakan Alat Pendeteksi Kematangan</h4>
                            <p className="text-justify md-text d-none d-md-block">Pembuatan Pakan ternak telah memasuki tahap fermentasi. untuk mencapai hasil yang memuaskan diperlukan monitoring sepanjang waktu dengan menggunakan Alat yang dilengkapi dengan Sensor Pendeteksi Kematangan</p>
                        </div>
                    </div>
                    {/* no 7 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c13} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Ujicoba Pakan Buatan pada Hewan Ternak Penduduk</h4>
                            <p className="text-justify md-text d-none d-md-block">Setelah proses Fermentasi Selesai, Pakan diberikan kepada hewan ternak penduduk untuk ujicoba. hasilnya cukup memuaskan. Hewan Ternak cukup menyukai Pakan tersebut</p>
                        </div>
                    </div>
                    {/* no 8 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c14} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Pelatihan pembuatan Pupuk Kompos dari Limbah Pertanian</h4>
                            <p className="text-justify md-text d-none d-md-block">Pelatihan Selanjutnya adalah Pelatihan Pembuatan Pupuk kompos dari Limbah Pertanian yang bertujuan agar warga mampu menghemat biaya untuk pupuk sekaligus meningkatkan hasil Tanam dari perkebunan Warga</p>
                        </div>
                    </div>
                    {/* no 9 */}
                    <div className="d-flex align-items-center my-5">
                        <img src={c15} className="col-5 rounded me-md-5 me-3" alt="thumb" />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title">Pengecekan Kematangan Pupuk Kompos Setelah Proses Dekomposisi</h4>
                            <p className="text-justify md-text d-none d-md-block">Pupuk kompos diperiksa Kematangannya agar pupuk kompos siap disebarkan ke lahan Tanam, Pengawasan Terhadap pupuk kompos perlu dilakukan agar Pupuk tidak terlalu lama didiamkan</p>
                        </div>
                    </div>
                    {/* no 10 */}
                    <div className="d-flex flex-row-reverse align-items-center my-5">
                        <img src={c16} className="col-5 rounded ms-md-5 ms-3" alt='thumb' />
                        <div>
                            <h5 className="d-none d-md-block">2020</h5>
                            <h4 className="md-title-reverse">Pemasangan Panel Surya di Lokasi </h4>
                            <p className="text-justify md-text d-none d-md-block">Panel Surya Mulai dipasang di Lokasi, Panel surya berfungsi sebagai Sumber energi listrik untuk menunjang Sistem Penyiraman Otomatis di Lokasi</p>
                        </div>
                    </div>
                    {/* Video Sprinkle */}
                    <div className="row justify-content-center pt-5">
                        {/* <iframe id="demo-player" className="col-12 embed-responsive-item cld-video-player" src="https://ik.imagekit.io/9kbvtqrtus/Media1.mp4?updatedAt=1684267172203" allow="autoplay" width="100%" height="300px" title="sprinkler" autoplay></iframe> */}
                        <video className="video-round col-11" src="https://ik.imagekit.io/9kbvtqrtus/Media1.mp4?updatedAt=1684267172203" autoplay="autoplay" muted loop></video>
                        <h4 className="col-8 pt-4">Ujicoba Sistem Penyiraman Otomatis Tenaga Surya</h4>
                        <p className="col-11 text-justify">Setelah Proses Instalasi selesai, Ujicoba dilakukan. Sistem terintegrasi dengan Panel Surya yang mampu mengubah Panas Matahari menjadi energi listrik. Sistem juga Terintegrasi dengan Listrik PLN sebagai tenaga Cadangan jika Energi Listrik di dalam baterai tidak memenuhi. Sistem Penyiraman ini juga dilengkapi dengan sensor Cuaca</p>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Story;