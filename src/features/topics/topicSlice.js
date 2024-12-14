import { createSlice } from "@reduxjs/toolkit";

//state example 

// {
//     topics: {
//       topics: {
//         '123': {
//           id: '123',
//           name: 'example topic',
//           icon: 'icon url',
//           quizIds: ['456']
//         }
//       }
//     },
//     quizzes: {
//       quizzes: {
//         '456': {
//           id: '456',
//           topicId: '123',
//           name: 'quiz for example topic',
//           cardIds: ['789', '101', '102']
//         }
//       }
//     },
//     cards: {
//       cards: {
//         '789': {
//           id: '789',
//           front: 'front text',
//           back: 'back text'
//         },
//         '101': {
//           id: '101',
//           front: 'front text',
//           back: 'back text'
//         },
//         '102': {
//           id: '102',
//           front: 'front text',
//           back: 'back text'
//         },
//       }
//     }
//   }
  

const option = {
  name: "topics",
  initialState: {
    topics:{}
  },
  reducers: {
    addTopic: (state, action) => {
      const topic = {
        ...action.payload,
        quizIds: [],
      };
      state.topics[topic.id] = topic;
    },
    addQuiz: (state,action) => {
      const {topicId, id} = action.payload;
      state.topics[topicId].quizIds.push(id); 
    }
  },
};

export const topicSlice = createSlice(option);

// will we use selectAllTopics by useselector which will pass the global state of our app.
export const selectAllTopics = (state) => {
    return state.topics.topics
}
export const {addTopic,addQuiz}  = topicSlice.actions;
export default topicSlice.reducer;
