import p1 from './assets/images/p1.png'
import p2 from './assets/images/p2.png'
import p3 from './assets/images/p3.png'
import p4 from './assets/images/p4.png'
import p5 from './assets/images/p5.png'




function Prestasi(){
    return(
        <div>
            <div  className="d-flex">
                <div className='row justify-content-center'>
                    <div className='col-8 justify-content-center'>
                        <h1 className='r'>Penghargaan dan Prestasi Saya</h1>
                    </div>
                    {/* list 1 */}
                    <div className='list d-inline-flex border rounded py-2 px-2 col-8 my-2'>
                        <img className="rounded mx-2" src={p1} width="270px" height="174px" />
                        <div className='content-box mx-2 px-3 py-3 container text-white' >
                            <p className="Header">Peraih Penghargaan SINTA Awards</p>
                            <p className='Content'>Meraih Penghargaan Sebagai Inventor Paling produktif di tingkat Nasional pada ajang Penghargaan SINTA Awards di tahun 2019</p>
                        </div>
                    </div>   

                    {/* list 2*/}
                    <div className='list d-inline-flex border rounded py-2 px-2 col-8 my-2'>
                        <img className="rounded mx-2" src={p2} width="270px" height="174px" />
                        <div className='content-box mx-2 px-3 py-3 container text-white' >
                            <p className="Header">Peraih Tanda Kehormatan Satyalancana 2022</p>
                            <p className='Content'>Menerima Piagam Penghargaan Tanda Kehormatan Satyalancana Karya Satya Tahun 2022 dari presiden Republik Indonesia</p>
                        </div>
                    </div> 

                    {/* list 3*/}
                    <div className='list d-inline-flex border rounded py-2 px-2 col-8 my-2'>
                        <img className="rounded mx-2" src={p3} width="270px" height="174px" />
                        <div className='content-box mx-2 px-3 py-3 container text-white' >
                            <p className="Header">Peraih Penghargaan Pertama dalam Pelaksanaan ABDIMAS USU 2022</p>
                            <p className='Content'>Menerima Penghargaan Pertama dalam Pengabdian Kepada Masyarakat Universitas Sumatera Utara Tahun 2022</p>
                        </div>
                    </div> 

                    {/* list 4*/}
                    <div className='list d-inline-flex border rounded py-2 px-2 col-8 my-2'>
                        <img className="rounded mx-2" src={p4} width="270px" height="174px" />
                        <div className='content-box mx-2 px-3 py-3 container text-white' >
                            <p className="Header">Berhasil Membawa Mahasiswa Fisika Memperoleh Medali Perak di PIMNAS 2017</p>
                            <p className='Content'>Membimbing Mahasiswa Fisika memperoleh medali perak dalam ajang Pekan Ilmiah Nasional di Makassar pada Tahun 2017</p>
                        </div>
                    </div>

                    <div className='list d-inline-flex border rounded py-2 px-2 col-8 my-2'>
                        <img className="rounded mx-2" src={p5} width="270px" height="174px" />
                        <div className='content-box mx-2 px-3 py-3 container text-white' >
                            <p className="Header">Berhasil Membawa Mahasiswa Fisika Memperoleh Medali Perunggu di PIMNAS 2019</p>
                            <p className='Content'>Membimbing Mahasiswa Fisika memperoleh medali perunggu dalam ajang Pekan Ilmiah Nasional di Bali pada Tahun 2019</p>
                        </div>
                    </div>  

                </div>
            </div>
        </div>
    )
}

export default Prestasi;