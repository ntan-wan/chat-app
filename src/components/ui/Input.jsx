import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'

export function Input({ placeholder, Icon, value, onChange, inputStyles, className, ...otherProps }) {
    return (
        <>
            <div className={cn('relative', className)}>
                {
                    Icon &&
                    <i className={cn('absolute z-10')} style={{ top: 14, left: 14 }}><Icon /></i>
                }
                <input {...otherProps} onChange={onChange} value={value} placeholder={placeholder} className={cn('w-full p-3 bg-neutral-100', {'pl-11': Icon}, inputStyles)} />
            </div>
        </>
    )
}

Input.propTypes = {
    Icon:PropTypes.elementType,
    className:PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value:PropTypes.string,
    inputStyles: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}