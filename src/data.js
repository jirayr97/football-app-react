const tournamentData = [
    {
        matchId: 20,
        children: [
            {
                matchId: 19,
                children: [
                    {
                        matchId: 17,
                        children: [
                            {
                                matchId: 13,
                                country1: "Russia",
                                country2: "Saudi Arabia",
                                parentId: 17,
                            },
                            {
                                matchId: 12,
                                country1: "Egypt",
                                country2: "Uruguay",
                                parentId: 17,
                            }
                        ]
                    },
                    {
                        matchId: 16,
                        parentId2: 16,
                        children: [
                            {
                                matchId: 11,
                                country1: "Morocco",
                                country2: "Iran", 
                                parentId2: 16,      
                            },
                            {
                                matchId: 10,
                                country1: "Portugal",
                                country2: "Spain",
                                parentId2: 16,         
                            }
                        ]
                    }
                ]
            },
            {
                matchId: 18,
                children: [
                    {
                        matchId: 15,
                        children: [
                            {
                                matchId: 9,
                                country1: "France",
                                country2: "Australia",
                            },
                            {
                                matchId: 8,
                                country1: "Argentina",
                                country2: "Iceland",
                            }
                        ]
                    },
                    {
                        matchId: 14,
                        children: [
                            {
                                matchId: 7,
                                country1: "Peru",
                                country2: "Denmark",
                            },
                            {
                                matchId: 6,
                                country1: "Croatia",
                                country2: "Nigeria",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        matchId: 40,
        children: [
            {
                matchId: 39,
                children: [
                    {
                        matchId: 37,
                        children: [
                            {
                                matchId: 33,
                                country1: "Costa Rica",
                                country2: "Serbia",
                            },
                            {
                                matchId: 32,
                                country1: "Germany",
                                country2: "Mexico",
                            }
                        ]
                    },
                    {
                        matchId: 36,
                        children: [
                            {
                                matchId: 31,
                                country1: "Brazil",
                                country2: "Switzerland",
                            },
                            {
                                matchId: 30,
                                country1: "Sweden",
                                country2: "Korea",
                            }
                        ]
                    }
                ]
            },
            {
                matchId: 38,
                children: [
                    {
                        matchId: 35,
                        country1: "",
                        country2: "",
                        children: [
                            {
                                matchId: 29,
                                country1: "Poland",
                                country2: "Senegal",
                                winner: "",
                            },
                            {
                                matchId: 28,
                                country1: "Colombia",
                                country2: "Japan",
                            }
                        ]
                    },
                    {
                        matchId: 34,
                        children: [
                            {
                                matchId: 27,
                                country1: "Panama",
                                country2: "Belgium",
                            },
                            {
                                matchId: 26,
                                country1: "Tunisia",
                                country2: "England",
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export default tournamentData;