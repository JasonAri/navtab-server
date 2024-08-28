const userService = require('../services/userService')

const userController = {
  setBookmarkList: async (req, res) => {
    try {
      const { username } = req.tokenPayload
      const { bookmarkList } = req.body
      const result = await userService.setBookmarkListByUsername(
        username,
        bookmarkList
      )
      res.status(200).json({ code: 200, message: 'ok', data: {} })
    } catch (error) {
      console.log(error)
      res.status(500).json({ code: 500, message: error.message, data: {} })
    }
  },

  getBookmarkList: async (req, res) => {
    try {
      const { username } = req.tokenPayload
      const bookmarkList = await userService.getBookmarkListByUsername(username)
      res.status(200).json({ code: 200, message: 'ok', data: { bookmarkList } })
    } catch (error) {
      console.log(error)
      res.status(500).json({ code: 500, message: error.message, data: {} })
    }
  }
}

module.exports = userController
