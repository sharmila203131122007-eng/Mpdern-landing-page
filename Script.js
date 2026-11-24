
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f8f7ff;
    color: #252342;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 8%;
}

.logo {
    color: #6c4ce4;
}

.navbar ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.navbar a {
    text-decoration: none;
    color: #252342;
}

.nav-btn, .main-btn {
    background: #6c4ce4;
    color: white !important;
    padding: 12px 22px;
    border-radius: 8px;
}

.hero {
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 10%;
    background: #eeebff;
}

.hero-content h1 {
    font-size: 55px;
    margin-bottom: 20px;
}

.hero-content span {
    color: #6c4ce4;
}

.hero-content p {
    line-height: 1.7;
    margin-bottom: 30px;
}

.hero-image {
    width: 300px;
    height: 300px;
    background: #d8ceff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-box {
    font-size: 100px;
}

.features {
    text-align: center;
    padding: 70px 8%;
}

.features h2, .about h2 {
    font-size: 32px;
    margin-bottom: 15px;
}

.cards {
    display: flex;
    gap: 25px;
    margin-top: 40px;
}

.card {
    flex: 1;
    background: white;
    padding: 35px 20px;
    border-radius: 12px;
    box-shadow: 0 5px 20px #00000010;
}

.card p {
    margin-top: 15px;
    line-height: 1.6;
}

.about {
    text-align: center;
    padding: 60px 20px;
    background: #eeebff;
}

footer {
    background: #252342;
    color: white;
    text-align: center;
    padding: 25px;
}

@media (max-width: 600px) {
    .navbar {
        flex-wrap: wrap;
        gap: 20px;
    }

    .navbar ul {
        gap: 15px;
    }

    .hero {
        flex-direction: column;
        text-align: center;
        gap: 40px;
    }

    .hero-content h1 {
        font-size: 38px;
    }

    .hero-image {
        width: 220px;
        height: 220px;
    }

    .cards {
        flex-direction: column;
    }
}
