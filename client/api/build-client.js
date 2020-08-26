import axios from 'axios'

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
      headers: req.headers // let ingress knows the host in header + cookies so that it can route correctly according to ingress path in its deployment
    })
  } else {
    // We are on the browser
    return axios.create({
      baseURL: '/'
    })
  }
}
