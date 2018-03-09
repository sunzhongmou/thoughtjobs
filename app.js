import polyfill from 'assets/plugins/polyfill'
import WxValidate from 'helpers/WxValidate'
import HttpResource from 'helpers/HttpResource'
import HttpService from 'helpers/HttpService'
import WxService from 'helpers/WxService'
import Tools from 'helpers/Tools'
import Config from 'etc/config'
import Utils from 'utils/util'

App({
  globalData: {
    userInfo: null,
    events: []
  },
  onLaunch() {
  },
  onShow() {
  },
  onHide() {
    console.log('onHide')
  },
  renderImage(path) {
    if (!path) return ''
    if (path.indexOf('http') !== -1) return path
    return `${this.Config.fileBasePath}${path}`
  },
  WxValidate: (rules, messages) => new WxValidate(rules, messages),
  HttpResource: (url, paramDefaults, actions, options) => new HttpResource(url, paramDefaults, actions, options).init(),
  HttpService: new HttpService,
  WxService: new WxService,
  Tools: new Tools,
  Config: Config,
})