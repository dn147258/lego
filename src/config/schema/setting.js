// 系统设置
const uploadFnDemo = `/**
 * 实现 window.fileUploader
 * 
 * file 文件对象
 * path 上传表单在schema中的路径，如 root.info.image
 * cbs 定义回调
 * 
 * cbs.progress: 更新进度, int, 值为0-100（success时自动设为100）
 * cbs.fail: 失败回调, string, 值为失败说明
 * cbs.success: 成功回调, string, 值为文件URI
 */
window.fileUploader = function (file, path, cbs) {
  setTimeout(() => {
    cbs.progress(30);
  }, 500);

  setTimeout(() => {
    cbs.success('//www.sogo.com/web/index/images/logo_440x140.v.4.png');
  }, 2e3);
};`;
const sideMenu = `[
  {
    "name": "一级菜单",
    "url": "/v1/link/",
    "icon": "gift"
  },
  {
    "name": "一级菜单",
    "sub": [
      {
        "name": "二级菜单",
        "url": "/v2/link/"
      }
    ]
  }
]`;
export const setting = {
  title: '系统设置',
  type: 'object',
  format: 'grid',
  properties: {
    name: {
      title: '系统名称',
      type: 'string',
      minLength: 1,
      options: {
        grid_columns: 2,
      },
    },
    baseUrl: {
      title: '接口前缀',
      type: 'string',
      options: {
        grid_columns: 5,
        inputAttributes: {
          placeholder: '如 https:/domain.com/api/ 或 /api/',
        },
      },
    },
    permissionApi: {
      title: '权限/菜单接口',
      type: 'string',
      options: {
        grid_columns: 5,
      },
    },
    sideMenu: {
      title: '权限/菜单配置',
      type: 'string',
      format: 'javascript',
      default: sideMenu,
      options: {
        grid_columns: 12,
      },
    },
    uploadFn: {
      title: '上传方法',
      type: 'string',
      format: 'javascript',
      default: uploadFnDemo,
      options: {
        grid_columns: 12,
      },
    },
  },
};
