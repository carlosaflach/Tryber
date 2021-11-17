// Action type:
export const NEW_ACTION = 'NEW_ACTION'

// Action Creator => Função que cria a action, e retorna a action.
export const newAction = (state) => ({ type: NEW_ACTION, state });