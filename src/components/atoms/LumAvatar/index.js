import { Avatar } from '@mui/material'

const LumAvatar = ({ profile, disableTitle, ...others }) => {
  function stringAvatar(name) {
    const initials = name.replace(/\s/g, '').slice(0, 2);
    const bgColor = 'info.main'
    const textColor = 'info.main.contrastText'

    return {
      sx: {
        ...others?.sx,
        bgcolor: bgColor,
        color: textColor,
        height: others?.sx?.height || 50,
        width: others?.sx?.width || 50,
      },
      children: `${initials}`,
      title: disableTitle ? undefined : (others?.title || name),
    }
  }

  return (
    <Avatar
      {...others}
      {...stringAvatar(profile)}
    />
  )
}

export default LumAvatar
