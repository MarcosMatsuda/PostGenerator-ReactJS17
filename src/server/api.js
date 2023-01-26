
import { v4 as uuidv4 } from 'uuid'

const Posts = [
    {
        id: uuidv4(),
        text: "This is my first post!"
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  add: function (data) {
    return new Promise((resolve) => {
        const existingIndex = Posts.findIndex(x => x.id === data.id)

        if (existingIndex === -1) {
            Posts.push(data)
        }

        setTimeout(() => resolve(data), 3000)
    })
  },
  update: function (data) {
    return new Promise((resolve) => {
        const { id } = data

        const targetIndex = Posts.findIndex(x => x.id === id)

        if (targetIndex > -1) {
            Posts[targetIndex] = { ...data }
        } else {
            new Error("Failed to update.")
        }

        setTimeout(() => resolve(data), 1000)
    })
  },
  delete: function (id) {
    return new Promise((resolve) => {
        const targetIndex = Posts.findIndex(x => x.id === id)

        if (targetIndex > -1)
            Posts.splice(targetIndex, 1)
        else {
            new Error("Failed to delete.")
        }

        setTimeout(() => resolve({ affected: 1 }), 1000)
    })
  },
  getAll: async function () {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Posts), 1000)
    })
  }
}