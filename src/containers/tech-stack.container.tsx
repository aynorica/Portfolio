import CPLUSPLUSVector from "../components/vectors/cplusplus.vector";
import JavaScriptVector from "../components/vectors/javscript.vector";
import LinuxVector from "../components/vectors/linux.vector";
import NestjsVector from "../components/vectors/nestjs.vector";
import NextJSVector from "../components/vectors/nextjs.vector";
import NGINXVector from "../components/vectors/nginx.vector";
import PostgreSQLVector from "../components/vectors/postgresql.vector";
import PythonVector from "../components/vectors/python.vector";
import ReactJSVector from "../components/vectors/reactjs.vector";
import RedisVector from "../components/vectors/redis.vector";
import TailwindCSSVector from "../components/vectors/tailwindcss.vector";
import TypeScriptVector from "../components/vectors/typescript.vector";
import UnrealEngineVector from "../components/vectors/unreal-engine.vector";

export default function TechStackContainer() {
	return (
		<div className="flex flex-wrap xl:gap-7 gap-5 justify-end w-full items-center max-w-[1920px] overflow-hidden">
			<div className="animate__animated animate__backInRight animation-delay-1">
				<ReactJSVector />
			</div>

			<div className="bg-slate-100 p-2 rounded-full animate__animated animate__backInRight animation-delay-2">
				<NextJSVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-3">
				<TailwindCSSVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-4">
				<NestjsVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-5">
				<RedisVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-6">
				<PostgreSQLVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-7">
				<NGINXVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-8">
				<LinuxVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-9">
				<PythonVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-10">
				<JavaScriptVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-11">
				<TypeScriptVector />
			</div>
			<div className="animate__animated animate__backInRight animation-delay-12">
				<CPLUSPLUSVector />
			</div>

			<div className="bg-slate-100 p-2 rounded-full animate__animated animate__backInRight animation-delay-13">
				<UnrealEngineVector />
			</div>
		</div>
	);
}
