import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import zh from 'date-fns/locale/zh-CN'

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnNull: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: ["localStorage", "sessionStorage", "cookie"],
    },
    resources: {
      en: {
        translation: {
          // common
          password: "Password",
          login: "Login",
          cancel: "Cancel",
          apply: "Apply",
          delete: "Delete",
          reset: "Reset",
          createUser: "Create User",
          username: "Username",
          expires: "Expires {{time}}",
          expired: "Expired {{time}}",
          dateFormat: "MMMM d, yyy",
          inbound: "Inbound",

          // Login
          "login.loginYourAccount": "Login to your account",
          "login.welcomeBack": "Welcome back, please enter your details",
          "login.fieldRequired": "This field is required",

          // Header
          "header.hostsSetting": "Hosts Settings",
          "header.nodesSetting": "Nodes Settings",
          "header.nodesUsage": "Nodes Usage",
          "header.donation": "Donation",
          "header.logout": "Log out",

          // DeleteUserModal
          "deleteUser.title": "Delete User",
          "deleteUser.prompt":
            "Are you sure you want to delete <b>{{username}}</b>?",
          "deleteUser.deleteSuccess": "{{username}} deleted successfully.",

          // UsersTable
          "usersTable.status": "status",
          "usersTable.dataUsage": "data usage",
          "usersTable.noUserMatched":
            "It seems there is no user matched with what you are looking for",
          "usersTable.noUser": "There is no user added to the system",
          "usersTable.copyLink": "Copy Subscription Link",
          "usersTable.copied": "Copied",
          "usersTable.copyConfigs": "Copy Configs",
          "usersTable.total": "Total",

          // UserDialog
          "userDialog.dataLimit": "Data Limit",
          "userDialog.periodicUsageReset": "Periodic Usage Reset",
          "userDialog.warningNoProtocol": "Please select at least one protocol",
          "userDialog.expiryDate": "Expiry Date",
          "userDialog.resetUsage": "Reset Usage",
          "userDialog.usage": "Usage",
          "userDialog.protocols": "Protocols",
          "userDialog.editUserTitle": "Edit user",
          "userDialog.editUser": "Edit user",
          "userDialog.userEdited": "User {{username}} edited.",
          "userDialog.userCreated": "User {{username}} created.",
          "userDialog.userAlreadyExists": "User already exists",
          "userDialog.vmessDesc": "Fast and secure",
          "userDialog.vlessDesc": "Lightweight, fast and secure",
          "userDialog.trojanDesc": "Lightweight, secure and lightening fast",
          "userDialog.shadowsocksDesc":
            "Fast and secure, but not efficient as others",
          "userDialog.resetStrategyNo": "No",
          "userDialog.resetStrategyDaily": "Daily",
          "userDialog.resetStrategyWeekly": "Weekly",
          "userDialog.resetStrategyMonthly": "Monthly",
          "userDialog.resetStrategyAnnually": "Annually",
          "userDialog.selectOneProtocol": "Please select at least one protocol",
          "userDialog.optional": "optional",
          "userDialog.method": "Method",
          "userDialog.generatedByDefault": "Automatically generated by default",
          "userDialog.hours": "Hours",
          "userDialog.days": "Days",
          "userDialog.weeks": "Weeks",
          "userDialog.months": "Months",
          "userDialog.relative": "Relative",
          "userDialog.absolute": "Absolute",
          "userDialog.custom": "Custom",
          "userDialog.startDate": "Start date",
          "userDialog.endDate": "End date",
          "userDialog.total": "Total: ",

          // HostsDialog
          "hostsDialog.title":
            "Using this setting, you are able to assign specific address for each inbound.",
          "hostsDialog.desc": "Use these variables to make it dynamic",
          "hostsDialog.username": "The username of the user",
          "hostsDialog.dataUsage": "The current usage of the user",
          "hostsDialog.dataLimit": "The usage limit of the user",
          "hostsDialog.remaingDays": "Remaining days of the user",
          "hostsDialog.proxyProtocol": "Proxy protocol (e.g. VMess)",
          "hostsDialog.proxyMethod": "Proxy transport method (e.g. ws)",
          "hostsDialog.currentServer": "Current server ip address",
          "hostsDialog.security": "Security Layer",
          "hostsDialog.host": "Request Host",
          "hostsDialog.port": "Port",
          "hostsDialog.sni": "SNI",
          "hostsDialog.advancedOptions": "Advanced options",
          "hostsDialog.addHost": "Add host",
          "hostsDialog.savedSuccess": "Hosts saved successfully",
          "hostsDialog.loading": "loading...",
          "hostsDialog.apply": "Apply",
          "hostsDialog.port.info":
            "By default, a host uses the default port of the inbound. You can set a custom port in case this host is a server that forwards traffic from a port that differs from your server's port. For example, the server may forward traffic from port 8443 to the default port of your inbound server.",
          "hostsDialog.sni.info":
            "By default, a host uses the default SNI of the inbound. You can set a custom SNI in case this host is a server that has a different SNI. For example, the server may receive traffic with a different SSL certificate, perform SSL termination, and forward it to your inbound server.",
          "hostsDialog.host.info":
            "By default, if a request host is set in the Xray config, this host is used. However, you can set a custom request host here if needed.",
          "hostsDialog.security.info":
            "If the middleware server of this host uses a different security layer than the inbound's default, you can set a custom security layer here.",
          "hostsDialog.alpn": "ALPN",
          "hostsDialog.fingerprint": "Fingerprint",

          // Nodes
          "nodes.title":
            "Using Marzban-Node, you are able to scale up your connection quality by adding different nodes on different servers.",
          "nodes.addNewMarzbanNode": "Add New Marzban Node",
          "nodes.certificate": "Certificate",
          "nodes.addHostForEveryInbound":
            "Add this node as a new host for every inbound",
          "nodes.addNode": "Add Node",
          "nodes.addNodeSuccess": "Node {{name}} added successfully",
          "nodes.apply": "editNode",
          "nodes.nodeName": "Name",
          "nodes.nodeAddress": "Address",
          "nodes.nodePort": "Port",
          "nodes.nodeAPIPort": "API Port",
          "nodes.editNode": "Edit Node",
          "nodes.reconnect": "Reconnect",

          // DeleteNodeModal
          "deleteNode.title": "Delete Node",
          "deleteNode.prompt":
            "Are you sure you want to delete the <b>{{name}}</b> node?",
          "deleteNode.deleteSuccess": "Node {{name}} removed successfully",

          // dashboard
          users: "Users",
          activeUsers: "active users",
          dataUsage: "data usage",
          memoryUsage: "memory usage",
          itemsPerPage: "Items per page",
          previous: "Previous",
          next: "Next",
          createNewUser: "Create new user",
          search: "Search",
          resetAllUsage: "Reset All Usages",

          // QRCodeDialog
          "qrcodeDialog.sublink": "Subscribe Link",

          // ResetUserUsageModal
          "resetUserUsage.prompt":
            "Are you sure you want to reset <b>{{username}}</b>'s usage?",
          "resetUserUsage.title": "Reset User Usage",
          "resetUserUsage.success":
            "{{username}}'s usage has reset successfully.",
          "resetUserUsage.error": "Usage reset failed, please try again.",

          // ResetAllUsageModal
          "resetAllUsage.title": "Reset data usage for all users",
          "resetAllUsage.prompt":
            "This action clears all of the users' data usage completely. Are you sure you want to reset all usage? THIS CANNOT BE UNDONE!",
          "resetAllUsage.success": "All usage has reset successfully.",
          "resetAllUsage.error": "Usage reset failed, please try again.",
        },
      },
      zh: {
        translation: {
          //common
          password: "密码",
          login: "登录",
          cancel: "取消",
          apply: "应用",
          delete: "删除",
          reset: "重置",
          createUser: "创建用户",
          username: "用户名",
          expires: "{{time}}有效",
          expired: "{{time}}失效",
          dateFormat: "MM/dd/yyyy",
          inbound: "入站",

          // page login
          "login.loginYourAccount": "登录您的帐号",
          "login.welcomeBack": "欢迎回来，请输入您的详细信息",
          "login.fieldRequired": "此项必填",

          // Header
          "header.hostsSetting": "主机设置",
          "header.nodesSetting": "节点设置",
          "header.nodesUsage": "节点统计",
          "header.donation": "捐赠",
          "header.logout": "退出",

          // DeleteUserModal
          "deleteUser.title": "删除用户",
          "deleteUser.prompt": "您确定你要删除 <b>{{username}}</b>？",
          "deleteUser.deleteSuccess": "{{username}} 删除成功。",

          // UsersTable
          "usersTable.status": "状态",
          "usersTable.dataUsage": "流量统计",
          "usersTable.noUserMatched": "没有找到您搜索的用户",
          "usersTable.noUser": "还没有添加任何用户",
          "usersTable.copyLink": "复制订阅链接",
          "usersTable.copied": "已复制",
          "usersTable.copyConfigs": "复制配置",
          "usersTable.total": "总共",

          // UserDialog
          "userDialog.dataLimit": "流量限制",
          "userDialog.periodicUsageReset": "定期重置流量",
          "userDialog.expiryDate": "过期日期",
          "userDialog.resetUsage": "重置流量",
          "userDialog.usage": "流量详情",
          "userDialog.protocols": "协议",
          "userDialog.editUserTitle": "用户编辑",
          "userDialog.editUser": "修改",
          "userDialog.userEdited": "已更新用户 {{username}}。",
          "userDialog.userCreated": "成功创建用户 {{username}}。",
          "userDialog.userAlreadyExists": "用户已存在",
          "userDialog.vmessDesc": "快速且安全",
          "userDialog.vlessDesc": "轻量、快速且安全",
          "userDialog.trojanDesc": "轻量、安全且非常快",
          "userDialog.shadowsocksDesc": "快速且安全, 但效率不如其它",
          "userDialog.resetStrategyNo": "无",
          "userDialog.resetStrategyDaily": "每天",
          "userDialog.resetStrategyWeekly": "每周",
          "userDialog.resetStrategyMonthly": "每月",
          "userDialog.resetStrategyAnnually": "每年",
          "userDialog.selectOneProtocol": "请至少选择一个协议",
          "userDialog.optional": "可以为空",
          "userDialog.method": "加密方式",
          "userDialog.generatedByDefault": "默认自动生成",
          "userDialog.hours": "小时",
          "userDialog.days": "天",
          "userDialog.weeks": "周",
          "userDialog.months": "月",
          "userDialog.relative": "相对时间",
          "userDialog.absolute": "选择范围",
          "userDialog.custom": "自定义",
          "userDialog.startDate": "开始日期",
          "userDialog.endDate": "结束日期",
          "userDialog.total": "总共：",

          // HostsDialog
          "hostsDialog.title": "使用此设置，您可以为每个入站分配特定的地址。",
          "hostsDialog.desc": "使用这些变量使其可以动态替换",
          "hostsDialog.username": "用户的用户名",
          "hostsDialog.dataUsage": "用户当前流量情况",
          "hostsDialog.dataLimit": "用户的流量限制",
          "hostsDialog.remaingDays": "用户的剩余天数",
          "hostsDialog.proxyProtocol": "代理协议（例如 VMess）",
          "hostsDialog.proxyMethod": "代理传输方法（例如 ws）",
          "hostsDialog.currentServer": "当前服务器的 IP 地址",
          "hostsDialog.security": "安全层",
          "hostsDialog.host": "请求主机",
          "hostsDialog.port": "端口",
          "hostsDialog.sni": "SNI",
          "hostsDialog.advancedOptions": "高级选项",
          "hostsDialog.addHost": "添加主机",
          "hostsDialog.savedSuccess": "设置保存成功",
          "hostsDialog.loading": "加载中...",
          "hostsDialog.apply": "保存",
          "hostsDialog.port.info":
            "默认情况下，主机使用入站端口的默认端口。如果此主机是一个服务器，用于从与您的服务器端口不同的端口转发流量，则可以设置自定义端口。例如，服务器可能会将来自端口 8443 的流量转发到您入站服务器的默认端口。",
          "hostsDialog.sni.info":
            "默认情况下，主机使用入站 SNI 的默认值。如果此主机是一个服务器且 SNI 不同，则可以设置自定义 SNI。例如，服务器可能会接收带有不同 SSL 证书的流量，执行 SSL 处理并将其转发到您的入站服务器。",
          "hostsDialog.host.info":
            "默认情况下，如果在 Xray 配置中设置了请求主机，则使用该主机。但是，如果需要，您可以在此处设置自定义请求主机。",
          "hostsDialog.security.info":
            "如果此主机的中间件服务器使用的安全层与入站默认值不同，则可以在此处设置自定义安全层。",
          "hostsDialog.alpn": "ALPN",
          "hostsDialog.fingerprint": "指纹",

          // Nodes
          "nodes.title":
            "使用 Marzban-Node，您可以通过在不同的服务器上添加不同的节点来提供多节点负载。",
          "nodes.addNewMarzbanNode": "添加新的 Marzban 节点",
          "nodes.certificate": "证书",
          "nodes.addHostForEveryInbound": "为每个入站请求添加此节点作为新主机",
          "nodes.addNode": "添加节点",
          "nodes.addNodeSuccess": "节点 {{name}} 添加成功",
          "nodes.editNode": "保存",
          "nodes.nodeName": "名称",
          "nodes.nodeAddress": "地址",
          "nodes.nodePort": "端口",
          "nodes.nodeAPIPort": "API 端口",
          "nodes.reconnect": "重新连接",
          "nodes.reconnecting": "重连中...",

          // DeleteNodeModal
          "deleteNode.title": "删除节点",
          "deleteNode.prompt": "您确实要删除 <b>{{name}}</b> 节点吗？",
          "deleteNode.deleteSuccess": "节点 {{name}} 删除成功",

          // dashboard
          users: "用户",
          activeUsers: "活跃用户",
          dataUsage: "总流量",
          memoryUsage: "内存状态",
          itemsPerPage: "每页条数",
          previous: "上一页",
          next: "下一页",
          createNewUser: "创建新用户",
          search: "搜索",
          resetAllUsage: "重置所有统计",

          // QRCodeDialog
          "qrcodeDialog.sublink": "订阅链接",

          // ResetUserUsageModal
          "resetUserUsage.prompt":
            "您确定要重置 <b>{{username}}</b> 的流量统计吗？",
          "resetUserUsage.title": "重置用户流量统计",
          "resetUserUsage.success": "{{username}} 的流量统计重置完成。",
          "resetUserUsage.error": "重置失败，请稍候再试",

          // ResetAllUsageModal
          "resetAllUsage.title": "重置所有用户的数据使用情况",
          "resetAllUsage.prompt":
            "此操作将清除所有用户统计，您确定要执行此操作吗？ 这不能被撤消！",
          "resetAllUsage.success": "所有统计重置完成。",
          "resetAllUsage.error": "重置失败，请稍候再试！",
        },
      },
    },
  }, function(err, t) {
    dayjs.locale(i18n.language);
  });

i18n.on("languageChanged", (lng) => {
  dayjs.locale(lng);
});

// DataPicker
registerLocale('es', es);
registerLocale('zh-cn', zh);

export default i18n;
