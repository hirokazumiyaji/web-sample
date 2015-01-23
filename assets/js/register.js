var Index = React.createClass({displayName: "Index",
  getInitialState: function () {
    return {
      agreement: "1",
      email: "",
      GoogleplaySubmit: "Google play",
      AppStoreSubmit: "App Store"
    };
  },
  handleChange: function (e) {
    this.setState({email: e.target.value});
  },
  handleSubmit: function (e) {
    console.log(e.target.value);
  },
  render: function() {
    return (
      React.createElement("section", {id: "preregistration"}, 
        React.createElement("div", {id: "form-container"}, 
          React.createElement("form", {id: "register-form", method: "post"}, 
            React.createElement("p", {id: "text-center"}, 
              React.createElement("a", {href: "#"}, "注意事項"), "・", React.createElement("a", {href: "#"}, "プライバシーポリシー"), "に必ず同意の上、登録してください。"
            ), 
            React.createElement("p", {id: "agreement_wrap"}, 
              React.createElement("label", null, React.createElement("input", {type: "checkbox", id: "agreement", name: "agreement", value: this.state.agreement}), "同意する")
            ), 
            React.createElement("p", {id: "email_wrap"}, 
              React.createElement("input", {type: "text", id: "email", name: "email", value: this.state.email, placeholder: "メールアドレスを入力", onChange: this.handleChange})
            ), 
            React.createElement("ul", {id: "submit_wrap"}, 
              React.createElement("li", null, React.createElement("input", {type: "submit", id: "btn-gp", value: this.state.GoogleplaySubmit, onClick: this.handleSubmit})), 
              React.createElement("li", null, React.createElement("input", {type: "submit", id: "btn-ios", value: this.state.AppStoreSubmit, onClick: this.handleSubmit}))
            ), 
            React.createElement("ul", {className: "exs"}, 
              React.createElement("li", {className: "ex"}, "※あらかじめ「@example.com」を受信可能ドメインに設定の上、登録してください。"), 
              React.createElement("li", {className: "ex"}, "※自動返信メールが迷惑メールフォルダに振り分けられる場合があります。")
            )
          )
        )
      )
     );
  }
});

React.render(React.createElement(Index, null), document.getElementById("contents"));
