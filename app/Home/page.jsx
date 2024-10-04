"use client"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "@/app/img/me.jpg";
import Facebook from "@/app/img/facebook.png";
import Instagram from "@/app/img/instagram.png";
import Twitter from "@/app/img/twitter.png";
import AdviceApp from "@/app/img/adviceGeneratorApp.png"
import AgeCalc from "@/app/img/ageCalc.png"
import DineRest from "@/app/img/dine-restaurant-ekrangor.png"
import github from "@/app/img/github.svg"
import linkdin from "@/app/img/linkdin.svg"

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          } else {
            entry.target.classList.remove("section-visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="container">
      <div className="Hero section">
        <h1>
          Fikirlerinizi hayata geçiren şık, duyarlı ve kullanıcı dostu web
          siteleri oluşturmaya odaklanan bir ön yüz geliştiricisiyim.
        </h1>
        <Link href={"/Projects"}>Projeleri Keşfedin ▶</Link>
      </div>

      <div className="AboutMe section">
        <div className="AboutMeText">
          <h2>Beni daha yakından tanıyalım</h2>
          <p>
            Sıla, Nişantaşı Üniversitesi'nde Bilgisayar Mühendisliği öğrencisi
            olup, frontend geliştirme konusunda uzmanlaşan bir yazılım
            geliştiricidir. Son 6 aydır Acunmedya Akademi’de frontend temelleri
            ve uzmanlığı üzerine eğitim aldı ve bu süreçte çeşitli projeler
            geliştirdi.
          </p>
          <Link href={"/AboutMe"}>Hakkımda Daha Fazlasını Keşfedin</Link>
        </div>
        <Image src={Me} width={250} alt="me" />
      </div>

      <div className="Projects section">
        <h2>Öne Çıkan Projelerim</h2>
        <ul>
          <li>
            <button href="https://advice-generator-app-five-rose.vercel.app/">
              <Image src={AdviceApp} width={327} height={230} alt="project" />
              <h4>Advice Generator App</h4>
            </button>
          </li>
          <li>
            <button href="https://age-calculator-phi-weld.vercel.app/">
              <Image src={AgeCalc} width={327} height={230} alt="project />
              <h4>Age Calculator</h4>
            </button>
          </li>
          <li>
            <button href="https://dine-restaurant-six.vercel.app/">
              <Image src={DineRest} width={327} height={230} alt="project />
              <h4>Dine Restaurant</h4>
            </button>
          </li>
        </ul>
        <Link href={"/Projects"}>Projeleri Keşfedin ▶</Link>
      </div>

      <div className="Footer section">
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
