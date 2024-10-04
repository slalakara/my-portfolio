import github from "@/app/img/github.svg";
import linkdin from "@/app/img/linkdin.svg";
import Css from "@/app/img/css.png"
import html from "@/app/img/html.png"
import js from "@/app/img/js.png"
import react from "@/app/img/react.png"
import next from "@/app/img/next-js.svg"
import java from "@/app/img/java.png"
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <div className="paragraf">
        <h1>Hakkımda</h1>
        <p>
          Merhaba! Ben 21 yaşında bir bilgisayar mühendisliği öğrencisiyim ve
          Nişantaşı Üniversitesi'nde 2. sınıfta eğitimime devam ediyorum.
          Aynı zamanda Acunmedya Akademi'de aldığım 6 aylık Frontend geliştirme
          eğitimimle HTML, CSS, JavaScript, React ve Next.js gibi teknolojilerde
          kendimi geliştirdim. Projelerimde Git ve GitHub kullanarak kodlarımı
          düzenli bir şekilde yönetiyorum. Kendimi sürekli geliştirmeyi
          hedefleyen, detaylara önem veren ve yeni teknolojilere meraklı
          biriyim. Frontend alanında hem temel hem de ileri seviye yetenekler
          kazanarak projeler üretmeye devam ediyorum.
        </p>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
         CV'mi Görüntüle
        </a>
      </div>
      <div className="follow-on-me">
        <div className="images">
          <div className="scroll">
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
            <Image src={html} width={30} height={30} alt="GitHub logo" />
            <Image src={Css} width={30} height={30} alt="LinkedIn logo" />
            <Image src={react} width={30} height={30} alt="GitHub logo" /> 
            <Image src={js} width={30} height={30} alt="LinkedIn logo" />
            <Image src={next} width={30} height={30} alt="GitHub logo" />
            <Image src={java} width={30} height={30} alt="LinkedIn logo" />
          </div>
        </div>
      </div>
      <div className="AboutMeFooter">
        <h3>Benimle İletişime Geçin</h3>
        <a href="mailto:silakara1453@gmail.com">silakara1453@gmail.com</a>
        <hr />
        <div className="social">
          <h1>SILA KARA</h1>
          <div className="imgs">
            <a href="https://github.com/slalakara">
              <Image src={github} width={30} height={30} alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/sıla-kara8888">
              <Image src={linkdin} width={30} height={30} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
