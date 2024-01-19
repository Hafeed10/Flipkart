import React from 'react'
import './Last.css'

function Last(props) {
    const march = [
        {
            _id:12,
            title:"Top Stories: Brand Directory",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sagittis lorem, sit amet suscipit exQuisque neque diam, tempus ornare ultrices sit amet, convallis ut velit. Phasellus aliquet eros pulvinar hendrerit porta. Donec maximus sit amet dolor ac hendrerit. Aenean tristique nulla sed dui finibus, sit amet sagittis nulla feugiat. Sed a velit nunc. Vivamus varius lacus ornare auctor euismod. lorem itototot gjjejgr place et justo vit  augue vel"
        },
        {
            _id:13,
            title:"Top Stories: Brand Directory",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sagittis lorem, sit amet suscipit exQuisque neque diam, tempus ornare ultrices sit amet, convallis ut velit. Phasellus aliquet eros pulvinar hendrerit porta. Donec maximus sit amet dolor ac hendrerit. Aenean tristique nulla sed dui finibus, sit amet sagittis nulla feugiat. Sed a velit nunc. Vivamus varius lacus ornare auctor euismod. lorem itototot gjjejgr place et justo vit  augue vel"
        },
        {
            _id:14,
            title:"Top Stories: Brand Directory",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sagittis lorem, sit amet suscipit exQuisque neque diam, tempus ornare ultrices sit amet, convallis ut velit. Phasellus aliquet eros pulvinar hendrerit porta. Donec maximus sit amet dolor ac hendrerit. Aenean tristique nulla sed dui finibus, sit amet sagittis nulla feugiat. Sed a velit nunc. Vivamus varius lacus ornare auctor euismod. lorem itototot gjjejgr place et justo vit  augue vel"
        },
    
        {
            _id:15,
            title:"Top Stories: Brand Directory",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sagittis lorem, sit amet suscipit exQuisque neque diam, tempus ornare ultrices sit amet, convallis ut velit. Phasellus aliquet eros pulvinar hendrerit porta. Donec maximus sit amet dolor ac hendrerit. Aenean tristique nulla sed dui finibus, sit amet sagittis nulla feugiat. Sed a velit nunc. Vivamus varius lacus ornare auctor euismod. lorem itototot gjjejgr place et justo vit  augue vel"
        },
        {
            _id:15,
            title:"Top Stories: Brand Directory",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sagittis lorem, sit amet suscipit exQuisque neque diam, tempus ornare ultrices sit amet, convallis ut velit. Phasellus aliquet eros pulvinar hendrerit porta. Donec maximus sit amet dolor ac hendrerit. Aenean tristique nulla sed dui finibus, sit amet sagittis nulla feugiat. Sed a velit nunc. Vivamus varius lacus ornare auctor euismod. lorem itototot gjjejgr place et justo vit  augue vel"
        },
    ]
  return (
    <div className='last'>
      {
        march.map((item, index) => {
          return (
            <div key={item._id}>
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Last
