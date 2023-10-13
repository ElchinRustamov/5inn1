import React from 'react'
import "../Css/style.css";
import AboutImg from "../Images/aboutImg.jpg"


const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <h1 className='heading'>
                    <span>Haqqımız</span>da
                </h1>
                <div  className='row'>
                    <div className='image'>
                        <img src={AboutImg} alt="img"/>
                    </div>
                    <div className='content'>
                        <h3>
                            Xidmətlərimiz
                        </h3>
                        <p>Y<span style={{textTransform:"lowercase"}}>
                            emək zövqünüzü bizimlə zənginləşdirin.
                            Biz 5 ayrıca xidmət seçimlərimizlə sizinləyik.
                            Yemək çatdırılma xidməti ilə, ləzzətli təamları mətbəximizdən sizin süfrənizə çatdırırıq.
                            Şirniyyat çatdırılma xidməti ilə,şirniyyat dünyasının ən gözəl nümunələri ilə evinizə şirinlik gətiririk.
                            Yarım hazırlanmış qidaların çatdırılma xidməti ilə, vaxtınızı idarə etməyə kömək edirik. Ev şəraitində cəmi bir neçə dəqiqəyə hazırlaya biləcəyiniz dondurulmuş və ya dondurulmamış məhsulları düz evinizə qədər çatdırırıq. Bu milli mətbəxin gözəl təamlarını dadmaq üçün sizə sadəcə yeməyi mikrodalğalı sobada isitmək yaxud 10 dəqiqə qaynayan suya atmağınız kifayətdir.
                            Kofe və içkilərin çatdırılma xidməti ilə, enerji və ləzzəti sizə gətirir,ən yaxşı anlarınızı təravətləndiririk.
                            </span>
                        </p>
                        <p>E<span style={{textTransform:"lowercase"}}>
                            xpres mətbəximiz isə tədbirləriniz üçün ən yaxşı seçimdir. Toy, ad günü və bütün növ rəsmi və qeyri rəsmi tədbirlərinizdə bizim Katering xidmətindən istifadə edə bilərsiniz.
                            Sınanmış təcrübələrimizlə sizi mükəmməl ləzzətlər və keyfiyyətli xidmətlərlə tanış edirik.
                            Sizi xidmətlərin ən yaxşısını seçməyə dəvət edirik.</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About