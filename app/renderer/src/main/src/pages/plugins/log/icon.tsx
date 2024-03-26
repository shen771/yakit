import Icon from "@ant-design/icons"
import {CustomIconComponentProps} from "@ant-design/icons/lib/components/Icon"
import React from "react"

interface IconProps extends CustomIconComponentProps {
    onClick: (e: React.MouseEvent) => void
    ref?: any
}

const PluginLogNew = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#EAECF3' />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.9992 5.69922C12.4963 5.69922 12.8992 6.10216 12.8992 6.59922V11.0992H17.3992C17.8963 11.0992 18.2992 11.5022 18.2992 11.9992C18.2992 12.4963 17.8963 12.8992 17.3992 12.8992H12.8992V17.3992C12.8992 17.8963 12.4963 18.2992 11.9992 18.2992C11.5022 18.2992 11.0992 17.8963 11.0992 17.3992V12.8992H6.59922C6.10216 12.8992 5.69922 12.4963 5.69922 11.9992C5.69922 11.5022 6.10216 11.0992 6.59922 11.0992L11.0992 11.0992V6.59922C11.0992 6.10216 11.5022 5.69922 11.9992 5.69922Z'
            fill='#85899E'
        />
    </svg>
)
/** 创建插件 */
export const PluginLogNewIcon = (props: Partial<IconProps>) => {
    return <Icon component={PluginLogNew} {...props} />
}

const PluginLogModify = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#EAECF3' />
        <path
            d='M17.828 13.3286C17.1045 14.0461 16.1828 14.5306 15.1816 14.7198C14.1804 14.909 13.1454 14.7943 12.21 14.3904L8.55375 18.6232C8.54672 18.6372 8.53266 18.6443 8.52563 18.6513C8.31723 18.8605 8.06959 19.0265 7.7969 19.1397C7.52421 19.253 7.23184 19.3113 6.93656 19.3113C6.64129 19.3113 6.34892 19.253 6.07623 19.1397C5.80353 19.0265 5.55589 18.8605 5.3475 18.6513C5.13831 18.4429 4.97232 18.1953 4.85906 17.9226C4.7458 17.6499 4.6875 17.3575 4.6875 17.0622C4.6875 16.767 4.7458 16.4746 4.85906 16.2019C4.97232 15.9292 5.13831 15.6816 5.3475 15.4732L5.37563 15.445L9.60844 11.7888C9.20073 10.86 9.08142 9.83018 9.26597 8.83278C9.45053 7.83539 9.93044 6.91643 10.6435 6.19504C11.3566 5.47365 12.2699 4.98309 13.2651 4.78695C14.2602 4.59082 15.2914 4.69815 16.2248 5.09504C16.3093 5.13051 16.3836 5.1863 16.4413 5.25745C16.4989 5.3286 16.5381 5.4129 16.5553 5.50285C16.5731 5.59345 16.5682 5.68702 16.5412 5.77531C16.5143 5.8636 16.466 5.94389 16.4006 6.0091L13.6655 8.74426L13.9256 10.0732L15.2545 10.3333L17.9897 7.59817C18.0549 7.53282 18.1352 7.48453 18.2235 7.45755C18.3118 7.43057 18.4053 7.42574 18.4959 7.44348C18.5859 7.46068 18.6702 7.49985 18.7413 7.5575C18.8125 7.61516 18.8683 7.68952 18.9038 7.77395C19.3007 8.7012 19.4103 9.7262 19.2186 10.7164C19.0268 11.7067 18.5424 12.6166 17.828 13.3286Z'
            fill='#85899E'
        />
    </svg>
)
/** 修改插件 */
export const PluginLogModifyIcon = (props: Partial<IconProps>) => {
    return <Icon component={PluginLogModify} {...props} />
}

const PluginLogPass = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#56C991' />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.0008 19.2008C15.9772 19.2008 19.2008 15.9772 19.2008 12.0008C19.2008 8.02433 15.9772 4.80078 12.0008 4.80078C8.02433 4.80078 4.80078 8.02433 4.80078 12.0008C4.80078 15.9772 8.02433 19.2008 12.0008 19.2008ZM15.3372 10.8372C15.6886 10.4857 15.6886 9.91586 15.3372 9.56439C14.9857 9.21291 14.4159 9.21291 14.0644 9.56439L11.1008 12.528L9.93718 11.3644C9.58571 11.0129 9.01586 11.0129 8.66439 11.3644C8.31291 11.7159 8.31291 12.2857 8.66439 12.6372L10.4644 14.4372C10.8159 14.7886 11.3857 14.7886 11.7372 14.4372L15.3372 10.8372Z'
            fill='white'
        />
    </svg>
)
/** 审核通过 */
export const PluginLogPassIcon = (props: Partial<IconProps>) => {
    return <Icon component={PluginLogPass} {...props} />
}

const PluginLogNoPass = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#F7544A' />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.2008 12.0008C19.2008 15.9772 15.9772 19.2008 12.0008 19.2008C8.02433 19.2008 4.80078 15.9772 4.80078 12.0008C4.80078 8.02433 8.02433 4.80078 12.0008 4.80078C15.9772 4.80078 19.2008 8.02433 19.2008 12.0008ZM15.1297 16.4024C14.247 17.0311 13.1671 17.4008 12.0008 17.4008C9.01844 17.4008 6.60078 14.9831 6.60078 12.0008C6.60078 10.8345 6.97051 9.75459 7.59915 8.87184L15.1297 16.4024ZM16.4025 15.1296L8.87196 7.59906C9.75469 6.97048 10.8346 6.60078 12.0008 6.60078C14.9831 6.60078 17.4008 9.01844 17.4008 12.0008C17.4008 13.167 17.0311 14.2469 16.4025 15.1296Z'
            fill='white'
        />
    </svg>
)
/** 审核不通过 */
export const PluginLogNoPassIcon = (props: Partial<IconProps>) => {
    return <Icon component={PluginLogNoPass} {...props} />
}

const PluginLogDel = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#EAECF3' />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.0992 4.80078C10.7583 4.80078 10.4467 4.99338 10.2942 5.29829L9.64299 6.60078H6.59922C6.10216 6.60078 5.69922 7.00373 5.69922 7.50078C5.69922 7.99784 6.10216 8.40078 6.59922 8.40078L6.59922 17.4008C6.59922 18.3949 7.40511 19.2008 8.39922 19.2008H15.5992C16.5933 19.2008 17.3992 18.3949 17.3992 17.4008V8.40078C17.8963 8.40078 18.2992 7.99784 18.2992 7.50078C18.2992 7.00373 17.8963 6.60078 17.3992 6.60078H14.3555L13.7042 5.29829C13.5518 4.99338 13.2401 4.80078 12.8992 4.80078H11.0992ZM9.29922 10.2008C9.29922 9.70372 9.70216 9.30078 10.1992 9.30078C10.6963 9.30078 11.0992 9.70372 11.0992 10.2008V15.6008C11.0992 16.0978 10.6963 16.5008 10.1992 16.5008C9.70216 16.5008 9.29922 16.0978 9.29922 15.6008V10.2008ZM13.7992 9.30078C13.3022 9.30078 12.8992 9.70372 12.8992 10.2008V15.6008C12.8992 16.0978 13.3022 16.5008 13.7992 16.5008C14.2963 16.5008 14.6992 16.0978 14.6992 15.6008V10.2008C14.6992 9.70372 14.2963 9.30078 13.7992 9.30078Z'
            fill='#85899E'
        />
    </svg>
)
/** 删除插件 */
export const PluginLogDelIcon = (props: Partial<IconProps>) => {
    return <Icon component={PluginLogDel} {...props} />
}

const PluginLogRestore = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#EAECF3' />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.59922 4.80078C7.09628 4.80078 7.49922 5.20372 7.49922 5.70078V7.59191C8.6423 6.42518 10.2357 5.70078 11.9992 5.70078C14.7437 5.70078 17.0761 7.45517 17.9405 9.90086C18.1061 10.3695 17.8605 10.8837 17.3919 11.0493C16.9232 11.215 16.409 10.9693 16.2434 10.5007C15.6252 8.7517 13.9571 7.50078 11.9992 7.50078C10.5278 7.50078 9.22005 8.2073 8.39864 9.30078H11.0992C11.5963 9.30078 11.9992 9.70373 11.9992 10.2008C11.9992 10.6978 11.5963 11.1008 11.0992 11.1008H6.59922C6.10216 11.1008 5.69922 10.6978 5.69922 10.2008V5.70078C5.69922 5.20372 6.10216 4.80078 6.59922 4.80078ZM6.60657 12.9522C7.07521 12.7866 7.5894 13.0322 7.75505 13.5009C8.37323 15.2499 10.0413 16.5008 11.9992 16.5008C13.4707 16.5008 14.7784 15.7943 15.5998 14.7008L12.8992 14.7008C12.4022 14.7008 11.9992 14.2978 11.9992 13.8008C11.9992 13.3037 12.4022 12.9008 12.8992 12.9008H17.3992C17.6379 12.9008 17.8668 12.9956 18.0356 13.1644C18.2044 13.3332 18.2992 13.5621 18.2992 13.8008V18.3008C18.2992 18.7978 17.8963 19.2008 17.3992 19.2008C16.9022 19.2008 16.4992 18.7978 16.4992 18.3008V16.4097C15.3561 17.5764 13.7628 18.3008 11.9992 18.3008C9.25475 18.3008 6.92236 16.5464 6.05793 14.1007C5.89229 13.6321 6.13792 13.1179 6.60657 12.9522Z'
            fill='#85899E'
        />
    </svg>
)
/** 回复插件 */
export const PluginLogRestoreIcon = (props: Partial<IconProps>) => {
    return <Icon component={PluginLogRestore} {...props} />
}