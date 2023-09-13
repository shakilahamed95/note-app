export default function Footer() {
  return (
    <footer>
      <div className=" bg-[#181E30] text-white h-40 pt-12">
        <h5 className="text-center">Note App</h5>
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
