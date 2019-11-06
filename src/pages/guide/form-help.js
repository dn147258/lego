import React from 'react';

export const FormHelp = () => (
  <div className='guide-main'>
    <div className='guide-help'>
      <div className='guide-node'>
        <h2 className='help-title help-title-main'>
          <span>创建表单</span>
        </h2>
        <div className='help-content'>
          <p>
            以JSON数据为模型，自动生成<a href=''>JSON-Schema</a>
            ，并渲染表单界面。后台开发人员首先要明确表单的内容和数据结构，自行构造出JSON数据。为使表单拥有更好的体验和易用性，需编写少量代码，这将使你创建的表单更强大，下面详细介绍如何使用。
          </p>
        </div>
      </div>

      <div className='guide-node' id='step-1'>
        <h2 className='help-title help-title-sub'>
          <a className='hash' href='#step-1'>
            <i className='fas fa-link'></i>
          </a>
          <span>第一步：填写表单基本信息和数据结构</span>
        </h2>
        <div className='help-content'>
          <ul>
            <li>
              <label>表单名称</label>
              <p>表单的名称，比如编辑商品、游戏配置等</p>
            </li>
            <li>
              <label>提交API</label>
              <p>
                表单以<code>POST</code>
                方式提交到此API，支持完整路径和相对路径，填写相对路径时会自动拼接系统设置里的「接口前缀」
              </p>
            </li>
            <li>
              <label>数据API</label>
              <p>
                编辑表单时回填数据的API（支持<a href=''>URL变量</a>
                ），数据结构必须与表单结构相匹配，否则会发生不可预期的错误。
              </p>
            </li>
            <li>
              <label>数据示例</label>
              <p>
                数据示例是生成表单的<b>核心</b>
                ，请自行设计JSON数据结构和内容，尽量使用真实值，系统会根据类型生成相应的表单（如日期、文件上传等），亦可在后续步骤中完善。
              </p>
            </li>
            <li>
              <label>表单备注</label>
              <p>表单备注信息，可记录表单用途、注意事项等，方便后期查阅</p>
            </li>
          </ul>
          <blockquote>填写以上内容后，点击页面底部「下一步」，预览生成的表单并进行完善。</blockquote>
        </div>
      </div>
      <div className='guide-node' id='step-2'>
        <h2 className='help-title help-title-sub'>
          <a className='hash' href='#step-2'>
            <i className='fas fa-link'></i>
          </a>
          <span>第二步：预览、完善和保存表单</span>
        </h2>
        <div className='help-content'>
          <ul>
            <li>
              <label>预览</label>
              <p>系统根据用户提供的数据示例自动生成表单，如果此时表单符合你的需求，可跳过下面步骤，直接保存即可。</p>
            </li>
            <li>
              <label>完善和扩展</label>
              <p>当表单不符合需求时，通过两方面进行完善：</p>
              <ul>
                <li>
                  1. 点击表单右上角蓝色箭头查看和编辑生成的JSON-Schema，参考
                  <a target='_blank' href='https://github.com/json-editor/json-editor'>
                    JSON-Schema用法
                  </a>
                  进行编辑， 完成后点击「更新至表单」进行预览。
                </li>
                <li>
                  2. 在「表单扩展」编写JavaScript进行扩展。
                  <br />
                  2.1 通过<code>window.__editor__</code>可获取编辑器实例，参考
                  <a target='_blank' href='https://github.com/json-editor/json-editor'>
                    JSON-Schema用法
                  </a>
                  对表单进行扩展。
                  <br />
                  2.2 声明<code>{'window.__dataReady__ = function(data) {}'}</code>
                  ，此方在数据回填完成时执行，并将回填数据作为参数传入。
                </li>
              </ul>
              <p></p>
              <blockquote>
                常见用法和使用技巧见<a href=''>文档附录</a>
              </blockquote>
            </li>
            <li>
              <label>测试和保存</label>
              <p>
                完善表单后，需进行试用和测试。点击「console.log」在浏览器打印表单数据，核对无误后点击「保存」完成创建。
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='guide-node' id='supplement'>
        <h2 className='help-title help-title-sub'>
          <a className='hash' href='#supplement'>
            <i className='fas fa-link'></i>
          </a>
          <span>附录</span>
        </h2>
        <div className='help-content'>记录使用技巧和常见问题，待补充...</div>
      </div>
    </div>
  </div>
);
