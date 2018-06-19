import MainTemplate from '../templates/Main.js'

const About = {
  data () {
    return {
      name: 'about'
    }
  },
  render (h) {
    const { name } = About.data()
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default MainTemplate(About)
