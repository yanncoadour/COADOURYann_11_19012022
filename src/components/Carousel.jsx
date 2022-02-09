import React, { Component } from 'react'
import '../styles/Carousel.css'
import { logements } from '../datas/logements'
import Chevronback from '../assets/chevron-caroussel-back.svg'
import Chevronnext from '../assets/chevron-caroussel-next.svg'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0,
    }
  }

  render() {
    // Création d'un Array avec toutes les images
    let imagesCarousel = []
    logements
      .filter((logement) => logement.id === this.props.id)
      .map((logement) => 
        logement.pictures.forEach((picture) => {
          imagesCarousel.push(
            <img src={picture} alt={logement.title} key={picture} />
          )
        })
      )

    const numberOfPicture = imagesCarousel.length - 1

    // Si c'est la dernière image aller à 0 et ajouter 1
    const incrementClicks = () => {
      if (this.state.clicks === numberOfPicture) {
        this.setState({
          clicks: this.state.clicks - numberOfPicture,
        })
      } else {
        this.setState({
          clicks: this.state.clicks + 1,
        })
      }
    }

    // Si c'est la premiere, aller à la dernière ou enlever 1
    const decrementClicks = () => {
      if (this.state.clicks === 0) {
        this.setState({
          clicks: this.state.clicks + numberOfPicture,
        })
      } else {
        this.setState({
          clicks: this.state.clicks - 1,
        })
      }
    }

    // Si il y a qu'une image ne pas afficher de bouton pour défiler les images que
    const displayButton = imagesCarousel.length === 1 ? 'displayButton' : ''

    return (
      <section className="carousel">
        <figure>{imagesCarousel[this.state.clicks]}</figure>
        <button className={`back ${displayButton}`} onClick={decrementClicks}>
          <img src={Chevronback} alt="" />
        </button>
        <button className={`next ${displayButton}`} onClick={incrementClicks}>
          <img src={Chevronnext} alt="" />
        </button>
      </section>
    )
  }
}

export default Carousel