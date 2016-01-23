module.exports = {

  wrapper: {
    opacity: '1',
    visibility: 'visible',
    position: 'fixed',
    overflow: 'auto',
    zIndex: '100001',
    transition: 'all 0.3s',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    display: 'flex',
    alignItems: 'center'
  },

  content: {
    transition: 'all 0.3s',
    backgroundColor: 'white',
    borderRadius: '3px',
    zIndex: 100,
    position: 'relative',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    overflow: 'scroll'
  },

  center: {
    verticalAlign: 'middle',
    justifyContent: 'center',
  },

  centerContent: {
    maxHeight: '90%'
  },

  left_center: {
    verticalAlign: 'middle',
    justifyContent: 'flex-start'
  },

  right_center: {
    verticalAlign: 'middle',
    justifyContent: 'flex-end'
  },

  full: {
    width: '100%',
    height: '100%'
  },

  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

  closeBtn: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: '#000',
    textShadow: '0 1px 0 #fff',
    opacity: '0.3',
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '20px',
    width: '30px',
    height: '30px'
  },

  fullCloseBtn: {
    right: '0',
    top: '0',
    borderRadius: '0'
  }
}