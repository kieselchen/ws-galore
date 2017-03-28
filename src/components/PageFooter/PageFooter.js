import React from 'react'
import classes from './PageFooter.scss'

export const PageFooter = () => (
  <footer className={classes.pageFooter} >
    <div className={classes.wrapper} >
        <p className={classes.copyright}>©2014 NCSOFT Corporation. All rights reserved. NCSOFT, the interlocking NC logo, Carbine, WildStar, and all associated logos and designs are trademarks or registered trademarks of NCSOFT Corporation.</p>
        <p className={classes.copyright}>All other trademarks are the property of their respective owners.</p>
        <hr className={classes.pageFooterDivider}/>
        <p className={classes.disclaimer}>Wildstar Galore Copyright © 2016. All Rights Reserved. Wildstar Galore's sites and services are all provided as-is and without warranty, express or implied. We do not guarantee their suitability for any purpose. We do not guarantee their continued existence or availability.</p>
        <p className={classes.disclaimer}>As a non-commercial fan site, the owner of the Wildstar Galore will not be held liable for any actions taken in editing or removing content from the Wildstar Galore sites or services.</p>
    </div>
  </footer>
)

export default PageFooter
