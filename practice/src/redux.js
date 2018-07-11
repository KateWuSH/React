/*
    參考文件：
    1) https://chentsulin.github.io/redux/docs/basics/UsageWithReact.html
    2) https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
    3) https://goo.gl/DSDGP1

    Redux 的 React 綁定擁抱了分離 presentational 和 container component 的概念。

    WHAT is Presentational & Container component:

    將組件分為兩類，會更容易重複使用和推理，我稱為 Presentational & Container components
    (有的稱為 Fat & Skinny, Smart & Dumb, Stateful & Pure, Screens & Components)

    ** Presentational components:
    1) 關心 how things LOOK
    2) 可以在裡面包含 presentational 和 container components，且通常有自己的 DOM 標記和樣式
    3) 通常允許透過 this.props.children 進行限制
    4) 不依賴 app 的其餘部分，像是 Flux actions 或 stores
    5) 不指定 data 的加載(loaded)或改變(mutated)方式
    6) 只透過 props 接收 data 和 callbacks
    7) 很少有自己的 state (如果有，是 UI state 而非 data)
    8) 除非需要 state, lifecycle hooks, 或 性能優化(performance optimizations)，會被寫成 
       functional components
    9) ex: Page, Sidebar, Story, UserInfo, List

    ** Container components:
    1) 關心 how things WORK
    2) 可以在裡面包含 presentational 和 container components，但除了一些 wrapping divs 外，
       通常不會有自己的 DOM 標記，且絕對不會有樣式
    3) 提供 data 和 behavior 給 presentational 或其他 container components
    4) 呼叫 Flux actions 並將其作為 callbacks 提供給 presentational components
    5) 通常有自己的狀態 (stateful)，因為它們常當數據源 (data sources)
    6) 通常使用更高階的組件生成 (higher order components)，像是 React Redux 的 connect(), 
       Relay 的 createContainer(), Flux Utils 的 Container.create()，而非手寫
    7) ex: UserPage, FollowersSidebar, StoryContainer, FollowedUserList 
*/