type TErrorProps = {
  message: string
}

const Error = ({ message }: TErrorProps) => {

  return (
    <div
      role="alert"
      className="p-2 text-center font-bold uppercase text-white bg-red-600">
      {message}
    </div>
  )
}

export default Error