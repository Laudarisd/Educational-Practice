"""

My DQN Code is based upon this awesome blog post: https://jaromiru.com/2016/10/03/lets-make-a-dqn-implementation/
"""

from sumo_environment import SumoEnv
from dqn_agent import Agent
import signal
import sys
import numpy as np
import pandas as pd
import ast
import time
import argparse

parser = argparse.ArgumentParser(description='Run a traci controlled sumo simulation running reinforcement learning.')
parser.add_argument('-i', type=int, help='how many iterations/simulation steps to execute', default=30000)
parser.add_argument('-s', help='which scenario to run. possible values are: {cgn|lust}', default="cgn")
parser.add_argument('-t',type=int, nargs='+', default=[1,2,3,4,5,6,7])



args = parser.parse_args()
max_num_steps=args.i
scenario=args.s
traffic_light_counts_to_include = args.t
gui=""

print "Running simulation({} steps) scenario '{}' for trafficlight counts{}: and clustering result: {}".format(max_num_steps,scenario, traffic_light_counts_to_include, "random")
sys.stdout.flush()

class config():
    def __init__(self, sumoBinary, sumoCmd, sumo_home=None):
        self.sumoBinary = sumoBinary
        self.sumoCmd = sumoCmd
        self.sumo_home = sumo_home


LinuxConfig = config(
    "/usr/bin/sumo{}".format(gui),
    None
 )
if scenario=="lust":
    LinuxConfig.sumoCmd=["/usr/bin/sumo{}".format(gui), "-c", "/home/ganjalf/sumo/LuSTScenario/scenario/dua.static.sumocfg"]
else:
    LinuxConfig.sumoCmd =["/usr/bin/sumo{}".format(gui), "-c", "/home/ganjalf/sumo/TAPASCologne-0.24.0/cologne.sumocfg"]


WinPythonPortableConfig = config(
    "E:\\Sumo\\bin\\sumo.exe",
    ["E:\\Sumo\\bin\\sumo.exe", "-c", "E:\\LuSTScenario\\scenario\\lust.net.xml"],
    "E:\\Sumo"
)

WinPythonPortableConfigGui = config(
    "E:\\Sumo\\bin\\sumo-gui.exe",
    ["E:\\Sumo\\bin\\sumo-gui.exe", "-c", "E:\\rilsa\\run.sumo.cfg"],
    "E:\\Sumo"
)

df = None
if scenario == "lust":
    lust_file_name = "../../clustering_code/dataset-lust-tl-clusters.csv"
    lust_raw_df = pd.read_csv(lust_file_name)
    lust_raw_df['trafficlight_count'] = lust_raw_df['trafficlight_count'].map(lambda x: ast.literal_eval(x))
    # find tls with 4 lanes and put them into (count, tl_id) tuples
    df = lust_raw_df
else:
    cgn_file_name = "../../clustering_code/dataset-cgn-tl-clusters.csv"
    cgn_raw_df = pd.read_csv(cgn_file_name)
    cgn_raw_df['trafficlight_count'] = cgn_raw_df['trafficlight_count'].map(lambda x: ast.literal_eval(x))
    df = cgn_raw_df

# set which clusters to use depending on the name of the columns
possible_clustering_results = ['clusters_maxabs_3dimensions', 'clusters_robust_3dimensions',
                               'clusters_combined_3dimensions', 'clusters_combined_robust_3dimensions']
cl = possible_clustering_results[0]

# set which traffic light counts/ junction sizes to use



sys.stdout.flush()
# create an extra column only containing the number of traffic lights for the junctinos for easier access
df['tl_counts'] = df['trafficlight_count'].map(lambda x: x[0])



# traffic_lights[0][1][cl]
filtered_df= df[df['tl_counts'].isin(traffic_light_counts_to_include)]
traffic_lights = map(lambda x: (x[0], x[1]), filtered_df["trafficlight_count"] )

# clusters=[(cluster_id, [tl_ids], tl_count)]



# define the environment

# env = SumoEnv(LinuxConfig,number_of_lights_to_control)


env = SumoEnv(LinuxConfig, traffic_lights, lambda x,y,z: x)
# env = SumoEnv(WinPythonPortableConfigGui,number_of_lights_to_control)




steps = 0
try:
    R = 0

    while True:
        # let all agents perform their actions

        traffic_lights


        for (count, tl_id) in (traffic_lights):
            max_action= env.actionCnt(tl_id)
            action= np.random.random_integers(0,max_action-1)
            env.setAction(action, tl_id)


        steps += 1

        # advance the simulation by one step
        env.simulationStepNoObservations()

        if steps == max_num_steps:
            env.close()
            break


finally:
    print "bye bye!"


print "Ran simulation scenario '{}' for trafficlight counts{}: and clustering result: {}".format(scenario, traffic_light_counts_to_include, "random")

print "reward function used:{}".format("none")