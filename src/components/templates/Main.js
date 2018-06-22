const MainTemplate = WrappedComponent => {
  return {
    data () {
      return {
        name: 'main template'
      }
    },
    methods: {
      hello () {
        alert('This is the message.')
      }
    },
    render (h) {
      return (
        <div class="main-template">
          <h1 on-click={this.hello}>{this.name}</h1>
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
