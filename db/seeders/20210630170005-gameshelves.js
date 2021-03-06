'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('GameShelves', [{usersId: "1", gameId: "257", status: "want_play"},
      {usersId: "1", gameId: "84", status: "have_played"},
      {usersId: "1", gameId: "149", status: "currently_playing"},
      {usersId: "1", gameId: "72", status: "want_play"},
      {usersId: "1", gameId: "46", status: "have_played"},
      {usersId: "1", gameId: "70", status: "currently_playing"},
      {usersId: "1", gameId: "117", status: "want_play"},
      {usersId: "1", gameId: "262", status: "have_played"},
      {usersId: "1", gameId: "256", status: "currently_playing"},
      {usersId: "1", gameId: "147", status: "want_play"},
      {usersId: "1", gameId: "35", status: "have_played"},
      {usersId: "1", gameId: "105", status: "currently_playing"},
      {usersId: "1", gameId: "209", status: "want_play"},
      {usersId: "1", gameId: "188", status: "have_played"},
      {usersId: "1", gameId: "100", status: "currently_playing"},
      {usersId: "1", gameId: "259", status: "want_play"},
      {usersId: "1", gameId: "259", status: "have_played"},
      {usersId: "1", gameId: "204", status: "currently_playing"},
      {usersId: "1", gameId: "248", status: "want_play"},
      {usersId: "1", gameId: "114", status: "have_played"},
      {usersId: "1", gameId: "46", status: "currently_playing"},
      {usersId: "1", gameId: "198", status: "want_play"},
      {usersId: "1", gameId: "193", status: "have_played"},
      {usersId: "1", gameId: "129", status: "currently_playing"},
      {usersId: "1", gameId: "48", status: "want_play"},
      {usersId: "1", gameId: "129", status: "have_played"},
      {usersId: "1", gameId: "166", status: "currently_playing"},
      {usersId: "1", gameId: "119", status: "want_play"},
      {usersId: "1", gameId: "270", status: "have_played"},
      {usersId: "1", gameId: "233", status: "want_play"},
      {usersId: "1", gameId: "59", status: "have_played"},
      {usersId: "1", gameId: "35", status: "want_play"},
      {usersId: "1", gameId: "122", status: "have_played"},
      {usersId: "1", gameId: "131", status: "want_play"},
      {usersId: "1", gameId: "57", status: "have_played"},
      {usersId: "12", gameId: "91", status: "want_play"},
      {usersId: "2", gameId: "268", status: "have_played"},
      {usersId: "13", gameId: "161", status: "currently_playing"},
      {usersId: "3", gameId: "107", status: "want_play"},
      {usersId: "20", gameId: "266", status: "have_played"},
      {usersId: "10", gameId: "137", status: "currently_playing"},
      {usersId: "9", gameId: "82", status: "want_play"},
      {usersId: "25", gameId: "143", status: "have_played"},
      {usersId: "26", gameId: "252", status: "currently_playing"},
      {usersId: "8", gameId: "173", status: "want_play"},
      {usersId: "6", gameId: "242", status: "have_played"},
      {usersId: "19", gameId: "78", status: "currently_playing"},
      {usersId: "13", gameId: "257", status: "want_play"},
      {usersId: "1", gameId: "135", status: "have_played"},
      {usersId: "5", gameId: "178", status: "currently_playing"},
      {usersId: "12", gameId: "148", status: "want_play"},
      {usersId: "8", gameId: "8", status: "have_played"},
      {usersId: "14", gameId: "51", status: "currently_playing"},
      {usersId: "27", gameId: "231", status: "want_play"},
      {usersId: "25", gameId: "111", status: "have_played"},
      {usersId: "7", gameId: "275", status: "currently_playing"},
      {usersId: "15", gameId: "230", status: "want_play"},
      {usersId: "28", gameId: "253", status: "have_played"},
      {usersId: "11", gameId: "116", status: "currently_playing"},
      {usersId: "16", gameId: "81", status: "want_play"},
      {usersId: "6", gameId: "146", status: "have_played"},
      {usersId: "3", gameId: "22", status: "currently_playing"},
      {usersId: "4", gameId: "230", status: "want_play"},
      {usersId: "16", gameId: "106", status: "have_played"},
      {usersId: "17", gameId: "108", status: "want_play"},
      {usersId: "16", gameId: "32", status: "have_played"},
      {usersId: "10", gameId: "245", status: "want_play"},
      {usersId: "14", gameId: "84", status: "have_played"},
      {usersId: "21", gameId: "165", status: "want_play"},
      {usersId: "27", gameId: "61", status: "have_played"},
      {usersId: "15", gameId: "114", status: "want_play"},
      {usersId: "8", gameId: "23", status: "have_played"},
      {usersId: "7", gameId: "201", status: "currently_playing"},
      {usersId: "2", gameId: "104", status: "want_play"},
      {usersId: "10", gameId: "257", status: "have_played"},
      {usersId: "12", gameId: "202", status: "currently_playing"},
      {usersId: "2", gameId: "47", status: "want_play"},
      {usersId: "5", gameId: "101", status: "have_played"},
      {usersId: "28", gameId: "255", status: "currently_playing"},
      {usersId: "23", gameId: "23", status: "want_play"},
      {usersId: "28", gameId: "61", status: "have_played"},
      {usersId: "5", gameId: "202", status: "currently_playing"},
      {usersId: "16", gameId: "219", status: "want_play"},
      {usersId: "25", gameId: "32", status: "have_played"},
      {usersId: "27", gameId: "67", status: "currently_playing"},
      {usersId: "2", gameId: "51", status: "want_play"},
      {usersId: "25", gameId: "270", status: "have_played"},
      {usersId: "11", gameId: "263", status: "currently_playing"},
      {usersId: "5", gameId: "214", status: "want_play"},
      {usersId: "20", gameId: "266", status: "have_played"},
      {usersId: "14", gameId: "157", status: "currently_playing"},
      {usersId: "3", gameId: "197", status: "want_play"},
      {usersId: "5", gameId: "41", status: "have_played"},
      {usersId: "20", gameId: "169", status: "currently_playing"},
      {usersId: "2", gameId: "130", status: "want_play"},
      {usersId: "8", gameId: "77", status: "have_played"},
      {usersId: "10", gameId: "275", status: "currently_playing"},
      {usersId: "6", gameId: "227", status: "want_play"},
      {usersId: "19", gameId: "215", status: "have_played"},
      {usersId: "21", gameId: "99", status: "want_play"},
      {usersId: "12", gameId: "134", status: "have_played"},
      {usersId: "21", gameId: "45", status: "want_play"},
      {usersId: "6", gameId: "169", status: "have_played"},
      {usersId: "18", gameId: "197", status: "want_play"},
      {usersId: "20", gameId: "153", status: "have_played"},
      {usersId: "25", gameId: "174", status: "want_play"},
      {usersId: "26", gameId: "41", status: "have_played"},
      {usersId: "16", gameId: "70", status: "currently_playing"},
      {usersId: "11", gameId: "37", status: "want_play"},
      {usersId: "10", gameId: "24", status: "have_played"},
      {usersId: "13", gameId: "24", status: "currently_playing"},
      {usersId: "16", gameId: "235", status: "want_play"},
      {usersId: "19", gameId: "270", status: "have_played"},
      {usersId: "3", gameId: "194", status: "currently_playing"},
      {usersId: "25", gameId: "158", status: "want_play"},
      {usersId: "15", gameId: "125", status: "have_played"},
      {usersId: "15", gameId: "117", status: "currently_playing"},
      {usersId: "20", gameId: "164", status: "want_play"},
      {usersId: "16", gameId: "139", status: "have_played"},
      {usersId: "25", gameId: "100", status: "currently_playing"},
      {usersId: "6", gameId: "145", status: "want_play"},
      {usersId: "11", gameId: "245", status: "have_played"},
      {usersId: "4", gameId: "223", status: "currently_playing"},
      {usersId: "6", gameId: "53", status: "want_play"},
      {usersId: "17", gameId: "251", status: "have_played"},
      {usersId: "13", gameId: "146", status: "currently_playing"},
      {usersId: "18", gameId: "197", status: "want_play"},
      {usersId: "15", gameId: "198", status: "have_played"},
      {usersId: "21", gameId: "243", status: "currently_playing"},
      {usersId: "19", gameId: "130", status: "want_play"},
      {usersId: "28", gameId: "62", status: "have_played"},
      {usersId: "14", gameId: "199", status: "currently_playing"},
      {usersId: "24", gameId: "92", status: "want_play"},
      {usersId: "10", gameId: "272", status: "have_played"},
      {usersId: "18", gameId: "192", status: "want_play"},
      {usersId: "28", gameId: "168", status: "have_played"},
      {usersId: "28", gameId: "54", status: "want_play"},
      {usersId: "16", gameId: "249", status: "have_played"},
      {usersId: "20", gameId: "234", status: "want_play"},
      {usersId: "20", gameId: "219", status: "have_played"},
      {usersId: "24", gameId: "139", status: "want_play"},
      {usersId: "4", gameId: "34", status: "have_played"},
      {usersId: "9", gameId: "14", status: "currently_playing"},
      {usersId: "8", gameId: "65", status: "want_play"},
      {usersId: "19", gameId: "265", status: "have_played"},
      {usersId: "23", gameId: "64", status: "currently_playing"},
      {usersId: "2", gameId: "88", status: "want_play"},
      {usersId: "14", gameId: "275", status: "have_played"},
      {usersId: "24", gameId: "132", status: "currently_playing"},
      {usersId: "15", gameId: "197", status: "want_play"},
      {usersId: "13", gameId: "242", status: "have_played"},
      {usersId: "11", gameId: "242", status: "currently_playing"},
      {usersId: "16", gameId: "73", status: "want_play"},
      {usersId: "8", gameId: "110", status: "have_played"},
      {usersId: "9", gameId: "194", status: "currently_playing"},
      {usersId: "23", gameId: "126", status: "want_play"},
      {usersId: "13", gameId: "179", status: "have_played"},
      {usersId: "27", gameId: "244", status: "currently_playing"},
      {usersId: "1", gameId: "256", status: "want_play"},
      {usersId: "16", gameId: "41", status: "have_played"},
      {usersId: "3", gameId: "119", status: "currently_playing"},
      {usersId: "5", gameId: "88", status: "want_play"},
      {usersId: "19", gameId: "96", status: "have_played"},
      {usersId: "13", gameId: "156", status: "currently_playing"},
      {usersId: "19", gameId: "157", status: "want_play"},
      {usersId: "2", gameId: "79", status: "have_played"},
      {usersId: "18", gameId: "13", status: "currently_playing"},
      {usersId: "15", gameId: "70", status: "want_play"},
      {usersId: "4", gameId: "202", status: "have_played"},
      {usersId: "17", gameId: "29", status: "want_play"},
      {usersId: "22", gameId: "220", status: "have_played"},
      {usersId: "17", gameId: "232", status: "want_play"},
      {usersId: "4", gameId: "30", status: "have_played"},
      {usersId: "19", gameId: "215", status: "want_play"},
      {usersId: "18", gameId: "142", status: "have_played"},
      {usersId: "15", gameId: "231", status: "want_play"},
      {usersId: "1", gameId: "204", status: "have_played"},
      {usersId: "13", gameId: "81", status: "currently_playing"},
      {usersId: "22", gameId: "235", status: "want_play"},
      {usersId: "19", gameId: "105", status: "have_played"},
      {usersId: "19", gameId: "226", status: "currently_playing"},
      {usersId: "25", gameId: "184", status: "want_play"},
      {usersId: "14", gameId: "151", status: "have_played"},
      {usersId: "5", gameId: "199", status: "currently_playing"},
      {usersId: "19", gameId: "171", status: "want_play"},
      {usersId: "5", gameId: "118", status: "have_played"},
      {usersId: "14", gameId: "82", status: "currently_playing"},
      {usersId: "16", gameId: "185", status: "want_play"},
      {usersId: "25", gameId: "158", status: "have_played"},
      {usersId: "6", gameId: "29", status: "currently_playing"},
      {usersId: "24", gameId: "254", status: "want_play"},
      {usersId: "14", gameId: "247", status: "have_played"},
      {usersId: "26", gameId: "266", status: "currently_playing"},
      {usersId: "1", gameId: "221", status: "want_play"},
      {usersId: "2", gameId: "80", status: "have_played"},
      {usersId: "14", gameId: "11", status: "currently_playing"},
      {usersId: "14", gameId: "108", status: "want_play"},
      {usersId: "27", gameId: "96", status: "have_played"},
      {usersId: "11", gameId: "149", status: "currently_playing"},
      {usersId: "16", gameId: "256", status: "want_play"},
      {usersId: "17", gameId: "81", status: "have_played"},
      {usersId: "7", gameId: "74", status: "currently_playing"},
      {usersId: "11", gameId: "7", status: "want_play"},
      {usersId: "6", gameId: "144", status: "have_played"},
      {usersId: "15", gameId: "116", status: "want_play"},
      {usersId: "26", gameId: "168", status: "have_played"},
      {usersId: "4", gameId: "15", status: "want_play"},
      {usersId: "25", gameId: "229", status: "have_played"},
      {usersId: "16", gameId: "54", status: "want_play"},
      {usersId: "6", gameId: "227", status: "have_played"},
      {usersId: "10", gameId: "83", status: "want_play"},
      {usersId: "19", gameId: "113", status: "have_played"},
      {usersId: "26", gameId: "233", status: "currently_playing"},
      {usersId: "28", gameId: "123", status: "want_play"},
      {usersId: "5", gameId: "147", status: "have_played"},
      {usersId: "5", gameId: "162", status: "currently_playing"},
      {usersId: "21", gameId: "116", status: "want_play"},
      {usersId: "21", gameId: "116", status: "have_played"},
      {usersId: "26", gameId: "120", status: "currently_playing"},
      {usersId: "9", gameId: "115", status: "want_play"},
      {usersId: "14", gameId: "76", status: "have_played"},
      {usersId: "19", gameId: "211", status: "currently_playing"},
      {usersId: "25", gameId: "225", status: "want_play"},
      {usersId: "8", gameId: "9", status: "have_played"},
      {usersId: "23", gameId: "80", status: "currently_playing"},
      {usersId: "22", gameId: "64", status: "want_play"},
      {usersId: "14", gameId: "110", status: "have_played"},
      {usersId: "12", gameId: "32", status: "currently_playing"},
      {usersId: "7", gameId: "201", status: "want_play"},
      {usersId: "5", gameId: "220", status: "have_played"},
      {usersId: "3", gameId: "246", status: "currently_playing"},
      {usersId: "8", gameId: "133", status: "want_play"},
      {usersId: "26", gameId: "211", status: "have_played"},
      {usersId: "17", gameId: "38", status: "currently_playing"},
      {usersId: "19", gameId: "90", status: "want_play"},
      {usersId: "23", gameId: "57", status: "have_played"},
      {usersId: "11", gameId: "177", status: "currently_playing"},
      {usersId: "10", gameId: "90", status: "want_play"},
      {usersId: "7", gameId: "216", status: "have_played"},
      {usersId: "18", gameId: "194", status: "want_play"},
      {usersId: "8", gameId: "109", status: "have_played"},
      {usersId: "17", gameId: "115", status: "want_play"},
      {usersId: "3", gameId: "111", status: "have_played"},
      {usersId: "1", gameId: "55", status: "want_play"},
      {usersId: "7", gameId: "180", status: "have_played"},
      {usersId: "16", gameId: "233", status: "want_play"},
      {usersId: "17", gameId: "8", status: "have_played"},
      {usersId: "7", gameId: "171", status: "currently_playing"},
      {usersId: "26", gameId: "154", status: "want_play"},
      {usersId: "22", gameId: "184", status: "have_played"},
      {usersId: "27", gameId: "64", status: "currently_playing"},
      {usersId: "22", gameId: "165", status: "want_play"},
      {usersId: "24", gameId: "40", status: "have_played"},
      {usersId: "4", gameId: "243", status: "currently_playing"},
      {usersId: "1", gameId: "199", status: "want_play"},
      {usersId: "10", gameId: "82", status: "have_played"},
      {usersId: "12", gameId: "158", status: "currently_playing"},
      {usersId: "16", gameId: "153", status: "want_play"},
      {usersId: "23", gameId: "73", status: "have_played"},
      {usersId: "25", gameId: "7", status: "currently_playing"},
      {usersId: "18", gameId: "245", status: "want_play"},
      {usersId: "7", gameId: "274", status: "have_played"},
      {usersId: "21", gameId: "130", status: "currently_playing"},
      {usersId: "11", gameId: "17", status: "want_play"},
      {usersId: "27", gameId: "128", status: "have_played"},
      {usersId: "17", gameId: "30", status: "currently_playing"},
      {usersId: "3", gameId: "112", status: "want_play"},
      {usersId: "16", gameId: "208", status: "have_played"},
      {usersId: "13", gameId: "165", status: "currently_playing"},
      {usersId: "26", gameId: "103", status: "want_play"},
      {usersId: "21", gameId: "70", status: "have_played"},
      {usersId: "5", gameId: "142", status: "currently_playing"},
      {usersId: "19", gameId: "8", status: "want_play"},
      {usersId: "4", gameId: "207", status: "have_played"},
      {usersId: "23", gameId: "196", status: "want_play"},
      {usersId: "19", gameId: "39", status: "have_played"},
      {usersId: "2", gameId: "161", status: "want_play"},
      {usersId: "25", gameId: "76", status: "have_played"},
      {usersId: "22", gameId: "44", status: "want_play"},
      {usersId: "15", gameId: "231", status: "have_played"},
      {usersId: "6", gameId: "159", status: "want_play"},
      {usersId: "9", gameId: "236", status: "have_played"},
      {usersId: "10", gameId: "129", status: "currently_playing"},
      {usersId: "4", gameId: "71", status: "want_play"},
      {usersId: "20", gameId: "84", status: "have_played"},
      {usersId: "23", gameId: "275", status: "currently_playing"},
      {usersId: "13", gameId: "89", status: "want_play"},
      {usersId: "6", gameId: "95", status: "have_played"},
      {usersId: "23", gameId: "185", status: "currently_playing"},
      {usersId: "10", gameId: "242", status: "want_play"},
      {usersId: "12", gameId: "153", status: "have_played"},
      {usersId: "6", gameId: "82", status: "currently_playing"},
      {usersId: "22", gameId: "209", status: "want_play"},
      {usersId: "18", gameId: "258", status: "have_played"},
      {usersId: "2", gameId: "191", status: "currently_playing"},
      {usersId: "18", gameId: "251", status: "want_play"},
      {usersId: "5", gameId: "97", status: "have_played"},
      {usersId: "24", gameId: "199", status: "currently_playing"},
      {usersId: "4", gameId: "153", status: "want_play"},
      {usersId: "23", gameId: "273", status: "have_played"},
      {usersId: "12", gameId: "9", status: "currently_playing"},
      {usersId: "10", gameId: "17", status: "want_play"},
      {usersId: "2", gameId: "274", status: "have_played"},
      {usersId: "11", gameId: "15", status: "currently_playing"},
      {usersId: "15", gameId: "123", status: "want_play"},
      {usersId: "23", gameId: "265", status: "have_played"},
      {usersId: "20", gameId: "239", status: "currently_playing"},
      {usersId: "10", gameId: "202", status: "want_play"},
      {usersId: "16", gameId: "265", status: "have_played"},
      {usersId: "24", gameId: "261", status: "want_play"},
      {usersId: "3", gameId: "12", status: "have_played"},
      {usersId: "28", gameId: "121", status: "want_play"},
      {usersId: "16", gameId: "244", status: "have_played"},
      {usersId: "21", gameId: "76", status: "want_play"},
      {usersId: "13", gameId: "244", status: "have_played"},
      {usersId: "21", gameId: "258", status: "want_play"},
      {usersId: "5", gameId: "27", status: "have_played"},
      {usersId: "15", gameId: "254", status: "currently_playing"},
      {usersId: "5", gameId: "2", status: "want_play"},
      {usersId: "25", gameId: "150", status: "have_played"},
      {usersId: "15", gameId: "145", status: "currently_playing"},
      {usersId: "4", gameId: "200", status: "want_play"},
      {usersId: "2", gameId: "5", status: "have_played"},
      {usersId: "17", gameId: "35", status: "currently_playing"},
      {usersId: "20", gameId: "166", status: "want_play"},
      {usersId: "17", gameId: "193", status: "have_played"},
      {usersId: "19", gameId: "249", status: "currently_playing"},
      {usersId: "21", gameId: "176", status: "want_play"},
      {usersId: "3", gameId: "7", status: "have_played"},
      {usersId: "10", gameId: "66", status: "currently_playing"},
      {usersId: "3", gameId: "172", status: "want_play"},
      {usersId: "9", gameId: "146", status: "have_played"},
      {usersId: "28", gameId: "213", status: "currently_playing"},
      {usersId: "19", gameId: "100", status: "want_play"},
      {usersId: "22", gameId: "41", status: "have_played"},
      {usersId: "11", gameId: "17", status: "currently_playing"},
      {usersId: "14", gameId: "271", status: "want_play"},
      {usersId: "22", gameId: "124", status: "have_played"},
      {usersId: "3", gameId: "102", status: "currently_playing"},
      {usersId: "14", gameId: "105", status: "want_play"},
      {usersId: "27", gameId: "55", status: "have_played"},
      {usersId: "13", gameId: "17", status: "currently_playing"},
      {usersId: "14", gameId: "39", status: "want_play"},
      {usersId: "15", gameId: "92", status: "have_played"},
      {usersId: "3", gameId: "205", status: "want_play"},
      {usersId: "20", gameId: "77", status: "have_played"},
      {usersId: "17", gameId: "216", status: "want_play"},
      {usersId: "25", gameId: "108", status: "have_played"},
      {usersId: "17", gameId: "270", status: "want_play"},
      {usersId: "4", gameId: "241", status: "have_played"},
      {usersId: "28", gameId: "87", status: "want_play"},
      {usersId: "21", gameId: "177", status: "have_played"},
      {usersId: "2", gameId: "68", status: "currently_playing"},
      {usersId: "2", gameId: "159", status: "want_play"},
      {usersId: "21", gameId: "30", status: "have_played"},
      {usersId: "14", gameId: "180", status: "currently_playing"},
      {usersId: "6", gameId: "271", status: "want_play"},
      {usersId: "28", gameId: "163", status: "have_played"},
      {usersId: "6", gameId: "132", status: "currently_playing"},
      {usersId: "21", gameId: "181", status: "want_play"},
      {usersId: "17", gameId: "9", status: "have_played"},
      {usersId: "11", gameId: "44", status: "currently_playing"},
      {usersId: "24", gameId: "83", status: "want_play"},
      {usersId: "16", gameId: "108", status: "have_played"},
      {usersId: "28", gameId: "234", status: "currently_playing"},
      {usersId: "3", gameId: "82", status: "want_play"},
      {usersId: "16", gameId: "267", status: "have_played"},
      {usersId: "19", gameId: "18", status: "currently_playing"},
      {usersId: "15", gameId: "143", status: "want_play"},
      {usersId: "3", gameId: "13", status: "have_played"},
      {usersId: "21", gameId: "138", status: "currently_playing"},
      {usersId: "21", gameId: "15", status: "want_play"},
      {usersId: "4", gameId: "247", status: "have_played"},
      {usersId: "24", gameId: "165", status: "currently_playing"},
      {usersId: "20", gameId: "215", status: "want_play"},
      {usersId: "25", gameId: "178", status: "have_played"},
      {usersId: "11", gameId: "154", status: "currently_playing"},
      {usersId: "2", gameId: "201", status: "want_play"},
      {usersId: "3", gameId: "96", status: "have_played"},
      {usersId: "20", gameId: "252", status: "want_play"},
      {usersId: "19", gameId: "153", status: "have_played"},
      {usersId: "10", gameId: "56", status: "want_play"},
      {usersId: "17", gameId: "187", status: "have_played"},
      {usersId: "1", gameId: "239", status: "want_play"},
      {usersId: "2", gameId: "180", status: "have_played"},
      {usersId: "11", gameId: "103", status: "want_play"},
      {usersId: "17", gameId: "86", status: "have_played"},
      {usersId: "4", gameId: "34", status: "currently_playing"},
      {usersId: "2", gameId: "143", status: "want_play"},
      {usersId: "23", gameId: "69", status: "have_played"},
      {usersId: "8", gameId: "154", status: "currently_playing"},
      {usersId: "3", gameId: "174", status: "want_play"},
      {usersId: "17", gameId: "196", status: "have_played"},
      {usersId: "24", gameId: "150", status: "currently_playing"},
      {usersId: "9", gameId: "89", status: "want_play"},
      {usersId: "25", gameId: "23", status: "have_played"},
      {usersId: "13", gameId: "167", status: "currently_playing"}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
