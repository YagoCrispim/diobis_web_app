interface Props {
  text: string
  loadAnotherPageFn: () => void
}

{/* componentizar esse botão ou usar o que já existe */}
const LoadMoreButton = ({ text, loadAnotherPageFn }: Props) => {
  return (
    <button
      onClick={() => loadAnotherPageFn()}
      style={
        {
          width: '50%',
          maxWidth: '200px',
          fontSize: '0.9rem',
          fontWeight: '400',
          color: '#ffffff',
          backgroundColor: '#3B82F6',
          padding: '10px',
          borderRadius: '10px',
        } as any
      }
    >
      {text}
    </button>
  )
}

export { LoadMoreButton }
