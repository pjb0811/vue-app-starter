const MainTemplate = WrappedComponent => {
  return {
    data () {
      return {
        name: 'main template'
      }
    },
    render (h) {
      const { name } = MainTemplate(WrappedComponent).data()
      return (
        <div class="main-template">
          <h1>{name}</h1>
          <div>
            <router-link to="/">
              <a>/main</a>
            </router-link>
            <router-link to="/about">
              <a>/about</a>
            </router-link>
          </div>
          <WrappedComponent />
        </div>
      )
    }
  }
}

export default MainTemplate
