import resim from '../img/profil.jpg'
import video from '../video/benim abilerim var di.mp4'
import video1 from '../video/HE KENETLENMELIYIZ.mp4'

export default function Profil(){
    return(
        <div>
            <main>
                <div class="container">
                <div class="header">
                <header class="nav">
                <nav>
                <strong>
                <a href="">HOME</a><a href="">HAKKIMDA</a> <a href="">PORTFOLIO</a> <a href="">BLOG</a><a
                                href="">İLETİŞİM</a>
                </strong>
                </nav>
                </header>
                </div>
                <div class="content">
                <div class="sidebar">
                <p><b>İLETİŞİM</b></p>
                

                <figure>
                <img class="profile-image" src={resim} alt=""/>
                </figure>
                <div class="social-media">
                        <span>Mail:info@salih4131.com</span>
                    </div>
                    <div class="social-media">
                        <span>Tel:0041536765439</span>
                    </div>
                    <div class="social-media">
                        <span>Website@salih.com</span>
                    </div>
                    <div class="social-media">
                        <span>Twitter@salih4131</span>
                    </div>
                </div>
                <div class="main">
                <p><b>HAKKIMDA</b></p>
                
                <table>
                        <br></br>
                        <tr>
                            <th>İSİM</th>
                            <td>Salih</td>
                            <th>YAŞ </th>
                            <td>41</td>
                            <th>ŞEHİR</th>
                            <td>Zurich</td>
                        </tr>
                        <tr>
                            <th>EGİTİM</th>
                            <td>Master</td>
                            <th>M.YILI</th>
                            <td>2006</td>
                            <th>ÜNİVERSİTE</th>
                            <td>Basel Ünv.2003</td>
                        </tr>
                        <tr>
                            <th>SEKTÖR</th>
                            <td>Programlama</td>
                            <th>Uzmanlık</th>
                            <td>Frontend</td>
                            <th>DENEYİM</th>
                            <td>15 Yıl</td>
                        </tr>
                        <tr>
                            <th>PROGRAMLAMA</th>
                            <td>2006-2010</td>
                            <th>FRONTEND</th>
                            <td>2010-2017</td>
                            <th>WEB DİZAYN</th>
                            <td>2017-2020</td>
                        </tr>
                    </table>
                    
                    <br></br>
                    <br></br>
                    <p id="extra">1980 Basel dogumluyum.Bütün egitim hayatımı Basel de tamamladık tan sonra,
                        2006 yılında Bern de bir özel şirkette iş hayatına başladım. 2010-17 yılları
                        arasında bir güvenlik firmasında frontend alanında calıştım. 2017 yılında
                        kendi firmamı kurdum ve halen bir web dizaynır olarak hayatıma devam etmekteyim.
                    </p>
                </div>
                </div>
                <div class="section1">
                <div class="cocuk">
                <p><b>COCUKLARIM</b></p>
                
                <table>
                        <br></br>
                        <tr>
                            <th>İSİM</th>
                            <th>YAŞ </th>
                            <th>OKUL</th>
                            <th>ENSTRÜMAN</th>
                        </tr>
                        <tr>
                            <td>EKREM</td>
                            <td>12</td>
                            <td>Ortaokul 2</td>
                            <td>Gitar-Flüt</td>
                        </tr>
                        <tr>
                            <td>CEMİLE</td>
                            <td>10</td>
                            <td>İlkokul 4</td>
                            <td>Piyano-Flüt</td>
                        </tr>
                        <tr>
                            <td>SANİYE</td>
                            <td>7</td>
                            <td>İlkokul 2</td>
                            <td>Flüt</td>
                        </tr>
                        <tr>
                            <td>Faruk</td>
                            <td>3</td>
                            <td>-</td>
                            <td>Flüt</td>
                        </tr>
                    </table>
                </div>
                <div class="arkadas">
                <p><b>ARKADAŞLARIM</b></p>
                
                <table>
                        <br></br>
                        <tr>
                            <th>İSİM</th>
                            <th>YAŞ </th>
                            <th>ŞEHİR</th>
                            <th>MESLEK </th>
                            <th>COCUK</th>
                            <th>Erkek-Kız</th>
                            <th>HOBİlERİ</th>
                        </tr>
                        <tr>
                            <td>CAGATAY</td>
                            <td>42</td>
                            <td>Zurich</td>
                            <td>Turizm</td>
                            <td>2</td>
                            <td>1 Erkek-1 Kız</td>
                            <td>Balık Tutmak - Kayak Yapmak</td>
                        </tr>
                        <tr>
                            <td>MUSTAFA</td>
                            <td>4O</td>
                            <td>Zurich</td>
                            <td>Bankacı</td>
                            <td>2</td>
                            <td>1 Erkek-1 Kız</td>
                            <td>Yemek Pişirmek - Kayak Yapmak</td>
                        </tr>
                        <tr>
                            <td>CEMALEDDİN</td>
                            <td>42</td>
                            <td>St.Gallen</td>
                            <td>Tur Rehberi</td>
                            <td>2</td>
                            <td>2 Kız</td>
                            <td>Kayak Yapmak - Futbol</td>
                        </tr>
                    </table>
                </div>
                </div>
                <div class="section2">
                <div class="hobi">
                    <p><b>HOBİLERİM</b></p>
                    
                    <table>
                        <br></br>
                        <tr>
                            <th>HOBİ</th>
                            <th>HAFTA </th>
                            <th>YIL</th>
                            <th>SEHİR</th>
                            <th>Y.GİDER</th>
                        </tr>
                        <tr>
                            <td>FUTBOL</td>
                            <td>1</td>
                            <td>35-40</td>
                            <td>Zurich</td>
                            <td>2000 Chf</td>
                        </tr>
                        <tr>
                            <td>YÜZMEL</td>
                            <td>1</td>
                            <td>25</td>
                            <td>Zurich</td>
                            <td>1000 Chf</td>
                        </tr>
                        <tr>
                            <td>BODY</td>
                            <td>1</td>
                            <td>40</td>
                            <td>Zurich</td>
                            <td>1500 Chf</td>
                        </tr>
                        <tr>
                            <td>KAYAK</td>
                            <td>-</td>
                            <td>3</td>
                            <td>St.Gallen</td>
                            <td>3000 Chf</td>
                        </tr>
                    </table>
                </div>
                <div class="video">
                <p><b>MULTİ MEDYA</b></p>
                
                <video id="bir" width="320" height="200" controls="autoplay">
                        <source src={video1} type="video/mp4"/>
                        <source src="video/HE KENETLENMELIYIZ.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                    <video id="iki" width="320" height="200" controls="autoplay">
                        <source src={video} type="video/mp4"/>
                        <source src="video/benim abilerim var di.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                </div>
            <div class="footer">
                <p id="footer">© izinsiz kopyalanamaz</p>
            </div>
                </div>
            </main>
        </div>

    )
}