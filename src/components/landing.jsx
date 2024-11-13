import styles from './landing.module.css';

function Landing() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.fondo}>
                    
                </div>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <img src="https://generatepress.com/assets/logo-white-asset.png" alt="" />
                        <p>Digital</p>
                    </div>
                    <div className={styles.links}>
                        <a href="#">Home</a>
                        <a href="#">Designer</a>
                        <a href="#">Features</a>
                        <a href="#">News</a>
                    </div>
                </div>
                <div className={styles.cont}>
                        <div className={styles.mincont}>
                            <div className={styles.cajas}>
                                <div className={styles.texts}>
                                    <div className={styles.text1}>
                                        <div className={styles.linea}></div>
                                        <h3>UI UX DESIGN AGENCY</h3>
                                    </div>
                                    <div className={styles.text2}>
                                        <h1>Make Digital</h1>
                                    </div>
                                    <div className={styles.text3}>
                                        <h2>Product</h2>
                                        <h3>with our Agency</h3>
                                    </div>
                                    <div className={styles.text4}>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis suscipit maiores soluta exercitationem delectus corrupti!. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>    
                                    </div> 
                                    <button className={styles.buton}>Learn More</button>
                                    <div className={styles.icons}>
                                        <i className='bx bxl-facebook-circle'></i>
                                        <i className='bx bxl-youtube'></i>
                                        <i className='bx bxl-whatsapp' ></i>
                                    </div>
                                </div>
                    
                            </div>
                            <div className={styles.cajas}>
                                <div className={styles.image}>
                                    <img src="/src/components/img/portada.svg" alt="" />
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </>
    );
}

export default Landing;
