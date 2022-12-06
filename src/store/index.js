import { createStore } from "vuex";
import round from "@/assets/data/round.json";

export default createStore({
  state: {
    team: {
      // Команда
      move: "3", // Выбрана первая команда(ход первой команды)(3 показать результаты)
      points: {
        // Фонд очков команд
        one: 0, // Первой команды
        two: 0, // Второй команды
      },
    },
    fundPoints: 0, // Общее кол-во баллов за раунд
  },

  getters: {
    getFundPoints: (state) => state.fundPoints,
    getTeam: (state) => state.team.move, // Какая выбрана команда
    getTeamPoints: (state) => state.team.points, // Количество очков, либо у первой, либо у второй команды
    getRound: () => round,
  },

  mutations: {
    setFundPoints(state, payload, coefficient = 1) {
      console.log("общий фонд", payload);
      // Фонд очков , если null, обнулить
      if (state.fundPoints == 0 && payload < 0) console.log("Не реагировать");
      else {
        if (payload) state.fundPoints += +payload * coefficient;
        else state.fundPoints = 0;
      }
    },

    teamSelection(state, payload) {
      // Выбор команды
      state.team.move = payload;
    },

    totalPoints(state, payload) {
      //  Рассчет очков команды
      console.log("Рассчет очков команды", payload);
      if (payload[0] == "1") {
        state.team.points.one += +payload[1];
      } else if (payload[0] == "2") {
        state.team.points.two += +payload[1];
      }
    },

    transferringPoints(state, payload) {
      // Перенос очков в команду
      console.log(payload);
      if (payload == "1") {
        state.team.points.one += state.fundPoints;
      } else if (payload == "2") {
        state.team.points.one += state.fundPoints;
      }
    },
  },
  actions: {
    gameIsOpposite({ commit, state }, payload) {
      // Игра наоборот
      commit("setFundPoints", payload[1]);
      // Бегущие цифры
      const time = 10;
      let interval = setInterval(() => {
        commit("setFundPoints", -2);
        if (state.fundPoints < 1) {
          clearInterval(interval);
          commit("totalPoints", payload);
        }
      }, time);
    },
    runningNumbers({ commit, state }) {
      // Бегущие цифры
      const time = 10;
      if (state.fundPoints > 0) {
        const score = state.fundPoints;
        let interval = setInterval(() => {
          commit("setFundPoints", -2);
          if (state.fundPoints < 1) {
            clearInterval(interval);
            commit("setFundPoints", null);
            commit("totalPoints", [state.team.move, score]);
            commit("teamSelection", "3");
          }
        }, time);
      }
    },
  },
  modules: {},
});
