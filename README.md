
# Wealth Health | HRnet 

The goal was to convert a JQuery Application to a React Application.

HRnet is a human ressource's application of Wealth Health Compagny


[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTMuMjkiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMTMuMjkgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMTMuMjkiIGhlaWdodD0iMzUiIGZpbGw9IiM2NTk5NEQiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIyMTMuMjkiIHk9IjAiIHdpZHRoPSIwIiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzg5QUQ1Ii8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTE1LjcwIDIyTDE0LjIyIDIyTDE0LjIyIDEzLjQ3TDE3LjIyIDEzLjQ3UTE4LjY5IDEzLjQ3IDE5LjUwIDE0LjEzUTIwLjMwIDE0Ljc5IDIwLjMwIDE2LjA1TDIwLjMwIDE2LjA1UTIwLjMwIDE2LjkwIDE5Ljg5IDE3LjQ4UTE5LjQ3IDE4LjA2IDE4LjczIDE4LjM3TDE4LjczIDE4LjM3TDIwLjY1IDIxLjkyTDIwLjY1IDIyTDE5LjA2IDIyTDE3LjM1IDE4LjcxTDE1LjcwIDE4LjcxTDE1LjcwIDIyWk0xNS43MCAxNC42NkwxNS43MCAxNy41MkwxNy4yMiAxNy41MlExNy45NyAxNy41MiAxOC4zOSAxNy4xNVExOC44MiAxNi43NyAxOC44MiAxNi4xMUwxOC44MiAxNi4xMVExOC44MiAxNS40MyAxOC40MyAxNS4wNVExOC4wNCAxNC42OCAxNy4yNiAxNC42NkwxNy4yNiAxNC42NkwxNS43MCAxNC42NlpNMzAuMjcgMjJMMjQuNjkgMjJMMjQuNjkgMTMuNDdMMzAuMjMgMTMuNDdMMzAuMjMgMTQuNjZMMjYuMTggMTQuNjZMMjYuMTggMTcuMDJMMjkuNjggMTcuMDJMMjkuNjggMTguMTlMMjYuMTggMTguMTlMMjYuMTggMjAuODJMMzAuMjcgMjAuODJMMzAuMjcgMjJaTTM1LjI1IDIyTDMzLjcxIDIyTDM2LjkzIDEzLjQ3TDM4LjI2IDEzLjQ3TDQxLjQ5IDIyTDM5Ljk0IDIyTDM5LjI0IDIwLjAxTDM1Ljk0IDIwLjAxTDM1LjI1IDIyWk0zNy41OSAxNS4yOEwzNi4zNSAxOC44MkwzOC44MyAxOC44MkwzNy41OSAxNS4yOFpNNDUuMTcgMTguMTlMNDUuMTcgMTguMTlMNDUuMTcgMTcuMzlRNDUuMTcgMTYuMTkgNDUuNjAgMTUuMjdRNDYuMDMgMTQuMzUgNDYuODMgMTMuODVRNDcuNjMgMTMuMzUgNDguNjggMTMuMzVMNDguNjggMTMuMzVRNTAuMDkgMTMuMzUgNTAuOTUgMTQuMTJRNTEuODEgMTQuODkgNTEuOTUgMTYuMjlMNTEuOTUgMTYuMjlMNTAuNDggMTYuMjlRNTAuMzcgMTUuMzcgNDkuOTQgMTQuOTZRNDkuNTEgMTQuNTUgNDguNjggMTQuNTVMNDguNjggMTQuNTVRNDcuNzEgMTQuNTUgNDcuMTkgMTUuMjZRNDYuNjcgMTUuOTYgNDYuNjYgMTcuMzNMNDYuNjYgMTcuMzNMNDYuNjYgMTguMDlRNDYuNjYgMTkuNDcgNDcuMTYgMjAuMjBRNDcuNjUgMjAuOTIgNDguNjEgMjAuOTJMNDguNjEgMjAuOTJRNDkuNDggMjAuOTIgNDkuOTIgMjAuNTNRNTAuMzYgMjAuMTQgNTAuNDggMTkuMjJMNTAuNDggMTkuMjJMNTEuOTUgMTkuMjJRNTEuODIgMjAuNTkgNTAuOTQgMjEuMzVRNTAuMDYgMjIuMTIgNDguNjEgMjIuMTJMNDguNjEgMjIuMTJRNDcuNTkgMjIuMTIgNDYuODEgMjEuNjNRNDYuMDMgMjEuMTUgNDUuNjEgMjAuMjZRNDUuMTkgMTkuMzcgNDUuMTcgMTguMTlaTTU3Ljk1IDE0LjY2TDU1LjMxIDE0LjY2TDU1LjMxIDEzLjQ3TDYyLjA4IDEzLjQ3TDYyLjA4IDE0LjY2TDU5LjQyIDE0LjY2TDU5LjQyIDIyTDU3Ljk1IDIyTDU3Ljk1IDE0LjY2Wk03Mi41OSAyMkw3MS4wNSAyMkw3NC4yNyAxMy40N0w3NS42MCAxMy40N0w3OC44MyAyMkw3Ny4yOCAyMkw3Ni41OCAyMC4wMUw3My4yOCAyMC4wMUw3Mi41OSAyMlpNNzQuOTMgMTUuMjhMNzMuNzAgMTguODJMNzYuMTcgMTguODJMNzQuOTMgMTUuMjhaTTg0LjI3IDIyTDgyLjc4IDIyTDgyLjc4IDEzLjQ3TDg2LjA1IDEzLjQ3UTg3LjQ4IDEzLjQ3IDg4LjMyIDE0LjIxUTg5LjE2IDE0Ljk2IDg5LjE2IDE2LjE4TDg5LjE2IDE2LjE4UTg5LjE2IDE3LjQ0IDg4LjM0IDE4LjEzUTg3LjUxIDE4LjgzIDg2LjAzIDE4LjgzTDg2LjAzIDE4LjgzTDg0LjI3IDE4LjgzTDg0LjI3IDIyWk04NC4yNyAxNC42Nkw4NC4yNyAxNy42NEw4Ni4wNSAxNy42NFE4Ni44NCAxNy42NCA4Ny4yNSAxNy4yN1E4Ny42NyAxNi45MCA4Ny42NyAxNi4xOUw4Ny42NyAxNi4xOVE4Ny42NyAxNS41MCA4Ny4yNSAxNS4wOVE4Ni44MyAxNC42OCA4Ni4wOSAxNC42Nkw4Ni4wOSAxNC42Nkw4NC4yNyAxNC42NlpNOTQuOTIgMjJMOTMuNDQgMjJMOTMuNDQgMTMuNDdMOTYuNzEgMTMuNDdROTguMTQgMTMuNDcgOTguOTggMTQuMjFROTkuODIgMTQuOTYgOTkuODIgMTYuMThMOTkuODIgMTYuMThROTkuODIgMTcuNDQgOTguOTkgMTguMTNROTguMTcgMTguODMgOTYuNjkgMTguODNMOTYuNjkgMTguODNMOTQuOTIgMTguODNMOTQuOTIgMjJaTTk0LjkyIDE0LjY2TDk0LjkyIDE3LjY0TDk2LjcxIDE3LjY0UTk3LjUwIDE3LjY0IDk3LjkxIDE3LjI3UTk4LjMzIDE2LjkwIDk4LjMzIDE2LjE5TDk4LjMzIDE2LjE5UTk4LjMzIDE1LjUwIDk3LjkxIDE1LjA5UTk3LjQ4IDE0LjY4IDk2Ljc1IDE0LjY2TDk2Ljc1IDE0LjY2TDk0LjkyIDE0LjY2Wk0xMDkuODEgMTguMDBMMTA5LjgxIDE4LjAwTDEwOS44MSAxNy41MlExMDkuODEgMTYuMjggMTEwLjI1IDE1LjMyUTExMC42OSAxNC4zNyAxMTEuNTAgMTMuODZRMTEyLjMwIDEzLjM1IDExMy4zNSAxMy4zNVExMTQuMzkgMTMuMzUgMTE1LjE5IDEzLjg1UTExNi4wMCAxNC4zNSAxMTYuNDQgMTUuMjlRMTE2Ljg4IDE2LjIzIDExNi44OSAxNy40OEwxMTYuODkgMTcuNDhMMTE2Ljg5IDE3Ljk2UTExNi44OSAxOS4yMSAxMTYuNDUgMjAuMTZRMTE2LjAyIDIxLjEwIDExNS4yMSAyMS42MVExMTQuNDEgMjIuMTIgMTEzLjM2IDIyLjEyTDExMy4zNiAyMi4xMlExMTIuMzIgMjIuMTIgMTExLjUxIDIxLjYxUTExMC43MCAyMS4xMCAxMTAuMjYgMjAuMTdRMTA5LjgxIDE5LjIzIDEwOS44MSAxOC4wMFpNMTExLjI5IDE3LjQ2TDExMS4yOSAxNy45NlExMTEuMjkgMTkuMzYgMTExLjg0IDIwLjEzUTExMi4zOSAyMC45MCAxMTMuMzYgMjAuOTBMMTEzLjM2IDIwLjkwUTExNC4zNCAyMC45MCAxMTQuODcgMjAuMTVRMTE1LjQwIDE5LjQwIDExNS40MCAxNy45NkwxMTUuNDAgMTcuOTZMMTE1LjQwIDE3LjUxUTExNS40MCAxNi4wOSAxMTQuODcgMTUuMzRRMTE0LjMzIDE0LjU4IDExMy4zNSAxNC41OEwxMTMuMzUgMTQuNThRMTEyLjM5IDE0LjU4IDExMS44NCAxNS4zM1ExMTEuMzAgMTYuMDkgMTExLjI5IDE3LjQ2TDExMS4yOSAxNy40NlpNMTIyLjgzIDIyTDEyMS4zNSAyMkwxMjEuMzUgMTMuNDdMMTIyLjgzIDEzLjQ3TDEyNi42NSAxOS41NEwxMjYuNjUgMTMuNDdMMTI4LjEyIDEzLjQ3TDEyOC4xMiAyMkwxMjYuNjQgMjJMMTIyLjgzIDE1Ljk1TDEyMi44MyAyMlpNMTQwLjMyIDIyTDEzOC44MyAyMkwxMzguODMgMTMuNDdMMTQwLjMyIDEzLjQ3TDE0NC4xMyAxOS41NEwxNDQuMTMgMTMuNDdMMTQ1LjYwIDEzLjQ3TDE0NS42MCAyMkwxNDQuMTIgMjJMMTQwLjMyIDE1Ljk1TDE0MC4zMiAyMlpNMTU1LjkyIDIyTDE1MC4zNCAyMkwxNTAuMzQgMTMuNDdMMTU1Ljg4IDEzLjQ3TDE1NS44OCAxNC42NkwxNTEuODIgMTQuNjZMMTUxLjgyIDE3LjAyTDE1NS4zMyAxNy4wMkwxNTUuMzMgMTguMTlMMTUxLjgyIDE4LjE5TDE1MS44MiAyMC44MkwxNTUuOTIgMjAuODJMMTU1LjkyIDIyWk0xNjEuODAgMTQuNjZMMTU5LjE2IDE0LjY2TDE1OS4xNiAxMy40N0wxNjUuOTMgMTMuNDdMMTY1LjkzIDE0LjY2TDE2My4yNyAxNC42NkwxNjMuMjcgMjJMMTYxLjgwIDIyTDE2MS44MCAxNC42NlpNMTc1LjA0IDIyTDE2OS42OCAyMkwxNjkuNjggMTMuNDdMMTcxLjE3IDEzLjQ3TDE3MS4xNyAyMC44MkwxNzUuMDQgMjAuODJMMTc1LjA0IDIyWk0xODAuNzMgMjJMMTc5LjI1IDIyTDE3OS4yNSAxMy40N0wxODAuNzMgMTMuNDdMMTgwLjczIDIyWk0xODcuMDIgMjJMMTg1LjU0IDIyTDE4NS41NCAxMy40N0wxOTAuOTYgMTMuNDdMMTkwLjk2IDE0LjY2TDE4Ny4wMiAxNC42NkwxODcuMDIgMTcuMjBMMTkwLjQ2IDE3LjIwTDE5MC40NiAxOC4zOEwxODcuMDIgMTguMzhMMTg3LjAyIDIyWk0xOTcuMTYgMTguODZMMTk0LjI5IDEzLjQ3TDE5NS45NCAxMy40N0wxOTcuOTAgMTcuNTFMMTk5Ljg3IDEzLjQ3TDIwMS41MSAxMy40N0wxOTguNjUgMTguODZMMTk4LjY1IDIyTDE5Ny4xNiAyMkwxOTcuMTYgMTguODZaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iIiBmaWxsPSIjRkZGRkZGIiB4PSIyMjYuMjkiLz48L3N2Zz4=)](https://oc14-react.netlify.app)             |  [![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjQuNTciIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMjQuNTcgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMjQuNTciIGhlaWdodD0iMzUiIGZpbGw9IiM3REM2NTkiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIyMjQuNTciIHk9IjAiIHdpZHRoPSIwIiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzg5QUQ1Ii8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTEzLjYxIDE5LjU3TDEzLjYxIDE5LjU3TDE1LjA5IDE5LjU3UTE1LjA5IDIwLjI1IDE1LjQzIDIwLjU5UTE1Ljc2IDIwLjkzIDE2LjQwIDIwLjkzTDE2LjQwIDIwLjkzUTE3LjAwIDIwLjkzIDE3LjM1IDIwLjU0UTE3LjcxIDIwLjE0IDE3LjcxIDE5LjQ1TDE3LjcxIDE5LjQ1TDE3LjcxIDEzLjQ3TDE5LjE5IDEzLjQ3TDE5LjE5IDE5LjQ1UTE5LjE5IDIwLjY4IDE4LjQyIDIxLjQwUTE3LjY2IDIyLjEyIDE2LjQwIDIyLjEyTDE2LjQwIDIyLjEyUTE1LjA3IDIyLjEyIDE0LjM0IDIxLjQ0UTEzLjYxIDIwLjc3IDEzLjYxIDE5LjU3Wk0yMy41NiAxOC4wMEwyMy41NiAxOC4wMEwyMy41NiAxNy41MlEyMy41NiAxNi4yOCAyNC4wMSAxNS4zMlEyNC40NSAxNC4zNyAyNS4yNSAxMy44NlEyNi4wNiAxMy4zNSAyNy4xMCAxMy4zNUwyNy4xMCAxMy4zNVEyOC4xNSAxMy4zNSAyOC45NiAxMy44NVEyOS43NiAxNC4zNSAzMC4yMCAxNS4yOVEzMC42NCAxNi4yMyAzMC42NSAxNy40OEwzMC42NSAxNy40OEwzMC42NSAxNy45NlEzMC42NSAxOS4xNyAzMC4yNiAyMC4wNlEyOS44OCAyMC45NSAyOS4xOSAyMS40N0wyOS4xOSAyMS40N0wzMC42NSAyMi42MUwyOS42OSAyMy40OEwyNy44OCAyMi4wNFEyNy41MiAyMi4xMiAyNy4xMSAyMi4xMkwyNy4xMSAyMi4xMlEyNi4wOCAyMi4xMiAyNS4yNyAyMS42MVEyNC40NSAyMS4xMCAyNC4wMSAyMC4xN1EyMy41NyAxOS4yMyAyMy41NiAxOC4wMFpNMjUuMDUgMTcuNDZMMjUuMDUgMTcuOTZRMjUuMDUgMTkuMzQgMjUuNTkgMjAuMTJRMjYuMTMgMjAuOTAgMjcuMTEgMjAuOTBMMjcuMTEgMjAuOTBRMjguMTAgMjAuOTAgMjguNjMgMjAuMTVRMjkuMTYgMTkuNDAgMjkuMTYgMTcuOTZMMjkuMTYgMTcuOTZMMjkuMTYgMTcuNTFRMjkuMTYgMTYuMDcgMjguNjIgMTUuMzNRMjguMDggMTQuNTggMjcuMTAgMTQuNThMMjcuMTAgMTQuNThRMjYuMTQgMTQuNTggMjUuNjAgMTUuMzNRMjUuMDYgMTYuMDkgMjUuMDUgMTcuNDZMMjUuMDUgMTcuNDZaTTM1LjAxIDE5LjE2TDM1LjAxIDE5LjE2TDM1LjAxIDEzLjQ3TDM2LjQ4IDEzLjQ3TDM2LjQ4IDE5LjE4UTM2LjQ4IDIwLjAzIDM2LjkyIDIwLjQ4UTM3LjM1IDIwLjkzIDM4LjE5IDIwLjkzTDM4LjE5IDIwLjkzUTM5LjkwIDIwLjkzIDM5LjkwIDE5LjEzTDM5LjkwIDE5LjEzTDM5LjkwIDEzLjQ3TDQxLjM4IDEzLjQ3TDQxLjM4IDE5LjE3UTQxLjM4IDIwLjUzIDQwLjUxIDIxLjMyUTM5LjY0IDIyLjEyIDM4LjE5IDIyLjEyTDM4LjE5IDIyLjEyUTM2LjczIDIyLjEyIDM1Ljg3IDIxLjMzUTM1LjAxIDIwLjU1IDM1LjAxIDE5LjE2Wk01MS41MyAyMkw0NS45NSAyMkw0NS45NSAxMy40N0w1MS40OSAxMy40N0w1MS40OSAxNC42Nkw0Ny40MyAxNC42Nkw0Ny40MyAxNy4wMkw1MC45NCAxNy4wMkw1MC45NCAxOC4xOUw0Ny40MyAxOC4xOUw0Ny40MyAyMC44Mkw1MS41MyAyMC44Mkw1MS41MyAyMlpNNTcuMjEgMjJMNTUuNzMgMjJMNTUuNzMgMTMuNDdMNTguNzMgMTMuNDdRNjAuMjAgMTMuNDcgNjEuMDAgMTQuMTNRNjEuODEgMTQuNzkgNjEuODEgMTYuMDVMNjEuODEgMTYuMDVRNjEuODEgMTYuOTAgNjEuMzkgMTcuNDhRNjAuOTggMTguMDYgNjAuMjQgMTguMzdMNjAuMjQgMTguMzdMNjIuMTYgMjEuOTJMNjIuMTYgMjJMNjAuNTcgMjJMNTguODYgMTguNzFMNTcuMjEgMTguNzFMNTcuMjEgMjJaTTU3LjIxIDE0LjY2TDU3LjIxIDE3LjUyTDU4LjczIDE3LjUyUTU5LjQ4IDE3LjUyIDU5LjkwIDE3LjE1UTYwLjMyIDE2Ljc3IDYwLjMyIDE2LjExTDYwLjMyIDE2LjExUTYwLjMyIDE1LjQzIDU5LjkzIDE1LjA1UTU5LjU1IDE0LjY4IDU4Ljc3IDE0LjY2TDU4Ljc3IDE0LjY2TDU3LjIxIDE0LjY2Wk02OC4yNCAxOC44Nkw2NS4zOCAxMy40N0w2Ny4wMiAxMy40N0w2OC45OCAxNy41MUw3MC45NSAxMy40N0w3Mi41OSAxMy40N0w2OS43MyAxOC44Nkw2OS43MyAyMkw2OC4yNCAyMkw2OC4yNCAxOC44NlpNODMuMjYgMjJMODEuNzIgMjJMODQuOTQgMTMuNDdMODYuMjcgMTMuNDdMODkuNTAgMjJMODcuOTUgMjJMODcuMjUgMjAuMDFMODMuOTUgMjAuMDFMODMuMjYgMjJaTTg1LjYwIDE1LjI4TDg0LjM3IDE4LjgyTDg2Ljg0IDE4LjgyTDg1LjYwIDE1LjI4Wk05NC45NCAyMkw5My40NSAyMkw5My40NSAxMy40N0w5Ni43MiAxMy40N1E5OC4xNSAxMy40NyA5OC45OSAxNC4yMVE5OS44MyAxNC45NiA5OS44MyAxNi4xOEw5OS44MyAxNi4xOFE5OS44MyAxNy40NCA5OS4wMSAxOC4xM1E5OC4xOCAxOC44MyA5Ni43MCAxOC44M0w5Ni43MCAxOC44M0w5NC45NCAxOC44M0w5NC45NCAyMlpNOTQuOTQgMTQuNjZMOTQuOTQgMTcuNjRMOTYuNzIgMTcuNjRROTcuNTEgMTcuNjQgOTcuOTIgMTcuMjdROTguMzQgMTYuOTAgOTguMzQgMTYuMTlMOTguMzQgMTYuMTlROTguMzQgMTUuNTAgOTcuOTIgMTUuMDlROTcuNTAgMTQuNjggOTYuNzYgMTQuNjZMOTYuNzYgMTQuNjZMOTQuOTQgMTQuNjZaTTEwNS41OSAyMkwxMDQuMTEgMjJMMTA0LjExIDEzLjQ3TDEwNy4zOCAxMy40N1ExMDguODEgMTMuNDcgMTA5LjY1IDE0LjIxUTExMC40OSAxNC45NiAxMTAuNDkgMTYuMThMMTEwLjQ5IDE2LjE4UTExMC40OSAxNy40NCAxMDkuNjYgMTguMTNRMTA4Ljg0IDE4LjgzIDEwNy4zNiAxOC44M0wxMDcuMzYgMTguODNMMTA1LjU5IDE4LjgzTDEwNS41OSAyMlpNMTA1LjU5IDE0LjY2TDEwNS41OSAxNy42NEwxMDcuMzggMTcuNjRRMTA4LjE3IDE3LjY0IDEwOC41OCAxNy4yN1ExMDkuMDAgMTYuOTAgMTA5LjAwIDE2LjE5TDEwOS4wMCAxNi4xOVExMDkuMDAgMTUuNTAgMTA4LjU4IDE1LjA5UTEwOC4xNSAxNC42OCAxMDcuNDIgMTQuNjZMMTA3LjQyIDE0LjY2TDEwNS41OSAxNC42NlpNMTIwLjQ4IDE4LjAwTDEyMC40OCAxOC4wMEwxMjAuNDggMTcuNTJRMTIwLjQ4IDE2LjI4IDEyMC45MiAxNS4zMlExMjEuMzYgMTQuMzcgMTIyLjE3IDEzLjg2UTEyMi45NyAxMy4zNSAxMjQuMDIgMTMuMzVRMTI1LjA2IDEzLjM1IDEyNS44NiAxMy44NVExMjYuNjcgMTQuMzUgMTI3LjExIDE1LjI5UTEyNy41NSAxNi4yMyAxMjcuNTYgMTcuNDhMMTI3LjU2IDE3LjQ4TDEyNy41NiAxNy45NlExMjcuNTYgMTkuMjEgMTI3LjEyIDIwLjE2UTEyNi42OSAyMS4xMCAxMjUuODggMjEuNjFRMTI1LjA4IDIyLjEyIDEyNC4wMyAyMi4xMkwxMjQuMDMgMjIuMTJRMTIyLjk5IDIyLjEyIDEyMi4xOCAyMS42MVExMjEuMzcgMjEuMTAgMTIwLjkzIDIwLjE3UTEyMC40OCAxOS4yMyAxMjAuNDggMTguMDBaTTEyMS45NiAxNy40NkwxMjEuOTYgMTcuOTZRMTIxLjk2IDE5LjM2IDEyMi41MSAyMC4xM1ExMjMuMDYgMjAuOTAgMTI0LjAzIDIwLjkwTDEyNC4wMyAyMC45MFExMjUuMDEgMjAuOTAgMTI1LjU0IDIwLjE1UTEyNi4wNyAxOS40MCAxMjYuMDcgMTcuOTZMMTI2LjA3IDE3Ljk2TDEyNi4wNyAxNy41MVExMjYuMDcgMTYuMDkgMTI1LjU0IDE1LjM0UTEyNS4wMCAxNC41OCAxMjQuMDIgMTQuNThMMTI0LjAyIDE0LjU4UTEyMy4wNiAxNC41OCAxMjIuNTEgMTUuMzNRMTIxLjk3IDE2LjA5IDEyMS45NiAxNy40NkwxMjEuOTYgMTcuNDZaTTEzMy41MCAyMkwxMzIuMDIgMjJMMTMyLjAyIDEzLjQ3TDEzMy41MCAxMy40N0wxMzcuMzIgMTkuNTRMMTM3LjMyIDEzLjQ3TDEzOC43OSAxMy40N0wxMzguNzkgMjJMMTM3LjMxIDIyTDEzMy41MCAxNS45NUwxMzMuNTAgMjJaTTE1MC45OSAyMkwxNDkuNTAgMjJMMTQ5LjUwIDEzLjQ3TDE1MC45OSAxMy40N0wxNTQuODAgMTkuNTRMMTU0LjgwIDEzLjQ3TDE1Ni4yNyAxMy40N0wxNTYuMjcgMjJMMTU0Ljc5IDIyTDE1MC45OSAxNS45NUwxNTAuOTkgMjJaTTE2Ni41OSAyMkwxNjEuMDEgMjJMMTYxLjAxIDEzLjQ3TDE2Ni41NSAxMy40N0wxNjYuNTUgMTQuNjZMMTYyLjQ5IDE0LjY2TDE2Mi40OSAxNy4wMkwxNjYuMDAgMTcuMDJMMTY2LjAwIDE4LjE5TDE2Mi40OSAxOC4xOUwxNjIuNDkgMjAuODJMMTY2LjU5IDIwLjgyTDE2Ni41OSAyMlpNMTcyLjQ3IDE0LjY2TDE2OS44MyAxNC42NkwxNjkuODMgMTMuNDdMMTc2LjYwIDEzLjQ3TDE3Ni42MCAxNC42NkwxNzMuOTQgMTQuNjZMMTczLjk0IDIyTDE3Mi40NyAyMkwxNzIuNDcgMTQuNjZaTTE4NS43MSAyMkwxODAuMzUgMjJMMTgwLjM1IDEzLjQ3TDE4MS44NCAxMy40N0wxODEuODQgMjAuODJMMTg1LjcxIDIwLjgyTDE4NS43MSAyMlpNMTkxLjQwIDIyTDE4OS45MiAyMkwxODkuOTIgMTMuNDdMMTkxLjQwIDEzLjQ3TDE5MS40MCAyMlpNMTk3LjY5IDIyTDE5Ni4yMSAyMkwxOTYuMjEgMTMuNDdMMjAxLjYzIDEzLjQ3TDIwMS42MyAxNC42NkwxOTcuNjkgMTQuNjZMMTk3LjY5IDE3LjIwTDIwMS4xMyAxNy4yMEwyMDEuMTMgMTguMzhMMTk3LjY5IDE4LjM4TDE5Ny42OSAyMlpNMjA3LjgzIDE4Ljg2TDIwNC45NiAxMy40N0wyMDYuNjEgMTMuNDdMMjA4LjU3IDE3LjUxTDIxMC41NCAxMy40N0wyMTIuMTggMTMuNDdMMjA5LjMyIDE4Ljg2TDIwOS4zMiAyMkwyMDcuODMgMjJMMjA3LjgzIDE4Ljg2WiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9IiIgZmlsbD0iI0ZGRkZGRiIgeD0iMjM3LjU3Ii8+PC9zdmc+)](oc14-jquery.netlify.app)
:-------------------------:|:-------------------------:

## Installation

### Clone project frome github

```bash
    git clone git@github.com:Hrobitaillie/hugorobitaillie_14_26012023.git
```
### Install project with npm

```bash
    npm install 
    npm run vite
```    
### Install project with yarn

```bash
    yarn 
    yarn vite
```


## Development constraints

> 👉 Use React Function componnents

> 👉 Create Employee page

> 👉 Create Employees List page

> 👉 Use a state management system (Redux, localstorage etc...)

> 👉 Customize the style (optional)

> 👉 Do manual tests

> 👉  Convert one or more JQuery plugin on a reusable React component library
## Library used



![mui/x-data-grid](https://img.shields.io/github/package-json/dependency-version/Hrobitaillie/hugorobitaillie_14_26012023/@mui/x-data-grid)

![mui/material](https://img.shields.io/github/package-json/dependency-version/Hrobitaillie/hugorobitaillie_14_26012023/@mui/material)
## License

[MIT](https://choosealicense.com/licenses/mit/) - [@hugorobitaillie](https://www.npmjs.com/~hugorobitaillie)

