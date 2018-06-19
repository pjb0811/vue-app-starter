import MainTemplate from '../templates/Main.js'
import Header from '../organisms/Header'

const Main = {
  data () {
    return {
      name: 'main'
    }
  },
  render (h) {
    const { name } = Main.data()
    return (
      <div>
        <h1>{name}</h1>
        <Header />
      </div>
    )
  }
}

export default MainTemplate(Main)
